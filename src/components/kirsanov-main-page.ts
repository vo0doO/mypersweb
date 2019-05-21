import {LitElement, customElement, html, css, property, TemplateResult} from 'lit-element';
import {installRouter, updateMetadata} from 'pwa-helpers';

import {VIEWS} from '../constants.js';
import { homeView } from '../articles/kirsanov-home-view.js';

import './kirsanov-header-bar.js';
import "./kirsanov-nav-section";
import "./kirsanov-portfolio";

@customElement('kirsanov-main-page')
class KirsanovMainPage extends LitElement {
  static get styles() {
    return css`
      :host {
        --header-font: ElliScript, Apple Symbols, BlinkMacSystemFont,
            "Google Sans", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        --main-font: "Google Sans", Apple Symbols, BlinkMacSystemFont,
            "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

        --IntlOrange: #C0362C;
      }

      kirsanov-header-bar {
        display: block;
        margin-bottom: 14px;
      }

      #body-wrapper {
        width: 80%;
        margin: 0 auto;
        display: flex;
      }

      #body {
        flex-grow: 1;
      }

      @media (max-width: 600px) {
        #body-wrapper {
          display: flex;
          flex-direction: column;
          width: 95%;
        }
      }

      .elliscript {
        font-family: var(--header-font);
      }

      .article h1, .article h2, .article h3 {
        font-family: var(--header-font);
        font-style: normal;
        font-variant: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 0px;
      }

      .article h1 {
        font-size: 3em;
      }

      .article h2 {
        font-size: 2.25em;
      }

      .article h3 {
        font-size: 1.725em;
      }

      .article code, .article pre {
        font-family: 'Courier New', 'Courier', 'monospace';
        font-size: 17px;
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
        line-height: 18.5714px;
      }

      .article a {
        color: var(--IntlOrange);
        text-decoration: none;
      }

      .article a:hover {
        text-decoration: underline;
      }

      .article {
        width: 80%;
        margin: 0 auto;
        font-family: var(--main-font);
        font-size: 18px;
        font-variant: normal;
        font-weight: 400;
        line-height: 25px;
      }
    `;
  }

  @property({type: String})
  backHref = '';

  @property({type: String})
  view: VIEWS = VIEWS.HOME;

  constructor() {
    super();
    installRouter(this.onNavigation);
  }

  onNavigation = (location: Location, event: Event | null) => {
    if (event && event.type === 'click') {
      window.scrollTo(0, 0);
    }

    switch(location.pathname) {
      case VIEWS.HOME:
        this.backHref = '';
        this.view = VIEWS.HOME;
        updateMetadata({
          title: 'Danila Kirsanov',
          description: 'This is my personal website!',
          url: location.href,
          image: '/assets/img/avatar-square.png'
        });
        break;
      case VIEWS.PORTFOLIO:
        this.backHref = VIEWS.HOME;
        this.view = VIEWS.PORTFOLIO;
        updateMetadata({
          title: 'Danila Kirsanov - Portfolio',
          description: 'Stalking Danila\'s portfolio, eh ?',
          url: location.href,
          image: '/assets/img/avatar-square.png'
        });
        break;
      default:
        this.backHref = '';
        this.view = VIEWS.HOME;
        updateMetadata({
          title: 'Danila Kirsanov',
          description: 'This is my personal website!',
          url: location.href,
          image: '/assets/img/avatar-square.png'
        });
        break;
    }
  }

  renderView(): TemplateResult {
    switch (this.view) {
      case VIEWS.HOME:
        return html`
          <div class="article">${homeView}</div>
        `;
      case VIEWS.PORTFOLIO:
        return html`<kirsanov-portfolio></kirsanov-portfolio>`;
      default:
        return html`
          <div class="article">${homeView}</div>
        `;
    }
  }

  render() {
    return html`
      <kirsanov-header-bar
          name="Danila Kirsanov"
          backHref=${this.backHref}>
      </kirsanov-header-bar>
      <div id="body-wrapper">
        <kirsanov-nav-section .view=${this.view}></kirsanov-nav-section>
        <div id="body">
          ${this.renderView()}
        </div>
      </div>
    `;
  }
}
