import { customElement, LitElement, html, css, property } from "lit-element";
import { VIEWS } from "../constants";

@customElement('kirsanov-nav-section')
class KirsanovNavSection extends LitElement {
  @property({type: Number})
  view: VIEWS= VIEWS.HOME;

  static get styles() {
    return css`
      header {
        margin-right: 2em;
      }

      #social-wrapper {
        display: flex;
        justify-content: center;
      }

      #social-wrapper img {
        height: 30px;
        width: 30px;
        margin: 0 .15em 0 .15em;
      }

      header, #button-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      button {
        font-family: var(--header-font);
        border: solid 1px black;
        background-color: white;
        color: black;
        font-size: 2em;
        text-align: center;
        height: 48px;
        width: 85px;
        padding: 8px;
        margin: .15em 0em .15em 0em;
      }

      button[selected], button:hover {
        background-color: black;
        color: white;
        cursor: pointer;
        cursor: hand;
      }

      #avatar {
        height: 150px;
        width: 150px;
      }

      @media (max-width: 600px) {
        #button-wrapper {
          flex-direction: row;
        }

        header {
          margin-right: 0;
        }

        button {
          margin: 0em .15em 0em .15em;
        }
      }
    `;
  }
  render() {
    return html`
      <header>
        <span>
          <a href=${VIEWS.HOME}>
            <picture alt="my face">
              <source type="image/webp" srcset="../assets/img/avatar-circle-sized.webp">
              <img id="avatar" src="../assets/img/avatar-circle-sized.png" alt="my face"/>
            </picture>
          </a>
        </span>
        <span id="social-wrapper">
          <a href="https://twitter.com/masterinmanage">
            <img alt="Twitter" src="../assets/img/twitter-logo.svg">
          </a>
          <a href="https://github.com/vo0doo">
            <img alt="github" src="../assets/img/github-logo.svg">
          </a>
        </span>
        <span id="button-wrapper">
          <a href=${VIEWS.HOME}>
            <button ?selected=${this.view === VIEWS.HOME}>About</button>
          </a>
          <a href=${VIEWS.PORTFOLIO}>
            <button ?selected=${this.view === VIEWS.PORTFOLIO}>Stuff</button>
          </a>
        </span>
      </header>
    `;
  }
}
