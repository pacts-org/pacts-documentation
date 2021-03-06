const {
  Page,
  html,
  css
} = require('@pacts/pacts-core');

const page = new class PageMapper extends Page {
  get title() {
    return 'Page mapper';
  }

  css() {
    return css`
      .indent-1 {
        padding-left: 20px;
      }

      .indent-2 {
        padding-left: 30px;
      }
    `;
  }

  html() {
    return html`
      <div class="disclaimer-container">
        Disclaimer: This is a beta version
      </div>

      <article>
        <article class="into-article">
          <h2>Page mapper</h2>
          <p>
          Page mapper is a module that helps with page routing. It can automatically load and route pages under a folder. You can slo set the default root page and a 404 page.
          </p>
        </article>

        <h6 style="padding-left:24px;">Quick links</h6>
        <ul>
          <li><anchor-link selector="#using-with-express" offset="56px">Using with Express</anchor-link></li>
          <li><a href="/documentation/web-components">Next: Components</a></li>
        </ul>

        <article class="sub-article" id="using-with-express">
          <h4>Using with Express</h4>
          <div class="spacer"></div>
          <h6>Application Folder structure</h6>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/4dc430ebb41134d9134747c45c645c77"></gist-embed>

          <div class="spacer"></div>
          <h6>Page routes</h6>
          <p class="direction">
            1. <b>/</b> <i>this will redirect to home</i><br />
            2. <b>/home</b><br />
            3. <b>/nested/one</b><br />
            4. <b>/404</b><br />
            5. <b>/none-existing-page</b> <i>this will redirect to 404</i>
          </p>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/c563dd945d72833b807c2e018f8daa63"></gist-embed>
        </article>

        <a class="button" href="/documentation/web-components">Next: Components</a>
      </article>
    `;
  }
}

module.exports = async () => page.build();
