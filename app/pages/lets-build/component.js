const {
  Page,
  html,
  css
} = require('@pacts/pacts-core');

const page = new class Component extends Page {
  get title() {
    return 'Component';
  }

  connectedCallback() {
    const percentProgressBar = document.querySelector('#percent-progress-bar');
    let percent = 0;
    const interval = setInterval(() => {
      percent += 0.1;
      percentProgressBar.setAttribute('percent', percent);
      if (percent === 100) clearInterval(interval);
    }, 1);
  }

  html() {
    return html`
      <div class="disclaimer-container">
        Disclaimer: This is a beta version
      </div>

      <article>
        <article class="into-article">
          <h2>Add a component</h2>
          <p>

          </p>
        </article>

        <h6 style="padding-left:24px;">Quick links</h6>
        <ul>
          <li><anchor-link selector="#one" offset="56px">Build a component</anchor-link></li>
          <li><anchor-link selector="#two" offset="56px">Add progress bar to page</anchor-link></li>
          <li><a href="/examples/loading-client">Next: Examples</a></li>
        </ul>

        <article class="sub-article" id="one">
          <h4>Build a component</h4>
          <p>We will be building the progress barr you see below</p>
          <progress-bar></progress-bar>
          <progress-bar id="percent-progress-bar" percent="0"></progress-bar>
          <div class="direction">
            create file: <b>progress-bar.js</b><br />
            Require <b>progress-bar.js</b> in the <b>server.js</b> file.
          </div>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/c262c72caf018bd56bce300481074cd6"></gist-embed>
        </article>

        <article class="sub-article" id="two">
          <h4>Add progress bar to page</h4>
          <p>Lets add the progress bar to the hello world page</p>
          <div class="direction">update file: <b>hello-world.js</b></div>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/c6299f37c9c0a2106d29f4406a5af17f"></gist-embed>
        </article>

        <a class="button" href="/examples/loading-client">Next: Examples</a>
      </article>
    `;
  }
}

module.exports = async () => page.build();
