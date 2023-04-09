import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class SearchBar extends LitElement {
  static get properties() {
    return {
      value: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      simple-icon {
        display: inline-block;
        --simple-icon-height: 40px;
        --simple-icon-width: 40px;
        padding-right: 5px;
      }

      #searchBar {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #c8c8c8;
        font-size: 16px;
        background-color: white;
        padding: 12px 20px 12px 40px;
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.35);
        background: url('https://img.icons8.com/fluency-systems-regular/512/search--v1.png')
          no-repeat left;
        background-size: 22px;
      }
    `;
  }

  constructor() {
    super();
    this.value = 'Search Content, Topics, and People';
  }

  render() {
    return html`
      <simple-icon icon="icons:search"></simple-icon>
      <input type="text" .value="${this.value}" @input="${this._handleInput}" />
    `;
  }

  _handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(
      new CustomEvent('value-changed', {
        detail: {
          value: this.value,
        },
      })
    );
  }
}

customElements.define('search-bar', SearchBar);
