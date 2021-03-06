const {
  Page,
  html,
  css
} = require('@pacts/pacts-core');

const page = new class Layout extends Page {
  get title() {
    return 'Layout';
  }

  html() {
    return html`
      <div class="disclaimer-container">
        Disclaimer: This is a beta version
      </div>

      <article>
        <article class="into-article">
          <h2>Main layout template</h2>
          <p>
            This is the main template file. There is nothing fancy or special here, just a function that rtuens a tempalte literal.
          </p>
        </article>

        <h6 style="padding-left:24px;">Quick links</h6>
        <ul>
          <li><anchor-link selector="#layout" offset="56px">Build layout</anchor-link></li>
          <li><a href="/lets-build/page">Next: 3. build a page</a></li>
        </ul>

        <article class="sub-article" id="layout">
          <h4>Main layout</h4>
          <p>This will wrap all the pages</p>
          <div class="direction">create file: <b>layout.js</b></div>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/d27a2850a47156f3808e69dd5336fb5c"></gist-embed>
        </article>

        <a class="button" href="/lets-build/page">Next: Lets build - 3. Page</a>
      </article>
    `;
  }
}

module.exports = async () => page.build();
