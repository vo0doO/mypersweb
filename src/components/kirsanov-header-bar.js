var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, property, css } from "lit-element";
let KirsanovHeaderBar = class KirsanovHeaderBar extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.backHref = '';
    }
    static get styles() {
        return css `
      #header {
        font-family: var(--header-font);
        font-size: 48px;
        position: relative;
        background-color: black;
        padding: 14px 0 14px 0;
        text-align: center;
      }

      a {
        color: white;
        text-decoration: none;
      }

      #name:hover {
        text-decoration: underline;
      }

      #backButton {
        position: absolute;
        left: 0;
        margin-left: 24px;
      }
    `;
    }
    renderBackButton() {
        return html `
      <a id="backButton" href=${this.backHref}><</a>
    `;
    }
    render() {
        return html `
      <div id="header">
        ${this.backHref ? this.renderBackButton() : ''}
        <a id="name" class="elliscript" href="/">${this.name}</a>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], KirsanovHeaderBar.prototype, "name", void 0);
__decorate([
    property({ type: String })
], KirsanovHeaderBar.prototype, "backHref", void 0);
KirsanovHeaderBar = __decorate([
    customElement('kirsanov-header-bar')
], KirsanovHeaderBar);
//# sourceMappingURL=kirsanov-header-bar.js.map