const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
      <div className="wrapper">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>DOCS</h5>
            <a href={this.docUrl('introduction.html')}>
              Introduction
            </a>
            <a href={this.docUrl('q-licensing/licensing.html')}>
              Licensing
            </a>
            <a href={this.docUrl('q-app/app-sigscope.html')}>
              Wacom Applications
            </a>
          </div>
          <div>
            <h5>COMMUNITY</h5>
            <a href="https://twitter.com/Wacomdevelopers">Twitter</a>
            <a href="https://www.linkedin.com/company/wacom-for-developers/">LinkedIn</a>
            <a href="https://github.com/Wacom-Developer">GitHub</a>
          </div>
          <div>
            <h5>ABOUT</h5>
            <a href="https://www.wacom.com/terms-of-use">Terms of Use</a>
            <a href="https://www.wacom.com/privacy">Privacy</a>
            <a href="https://www.wacom.com/cookie-notice">Cookies</a>
          </div>
        </section>
        <div className="footer-bottom">
        <a
          href="https://developer.wacom.com"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/wacom-for-developers-single-line-logo.svg`}
            alt="Wacom Developer Relations"
            width="170"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
        </div>
      </div>
      </footer>
    );
  }
}

module.exports = Footer;
