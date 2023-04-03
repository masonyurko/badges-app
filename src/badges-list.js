import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import './badges-app.js';

export class BadgesList extends LitElement {
  static get tag() {
    return 'badges-list';
  }

  static get properties() {
    return {
      badgeTitle: { type: String },
      badgeDesc: { type: String },
      badgeImg: { type: String },
      author: { type: String },
      accent: { type: String },
      color: { type: String },
    };
  }

  static syles = css`
    :host {
      --color-primary: #4e97d1;
      --color-accent: #a3ceef;
    }
    p {
      margin: 0;
      padding-left: 12px;
      font-family: 'Open Sans', sans-serif;
    }
    .badge {
      width: 256px;
      height: 112px;
      outline: solid;
      outline-color: var(--color-primary);
      border-radius: 6px;
      display: flex;
      flex-direction: row;
    }
    .badge .accent {
      width: 12px;
      height: 112px;
      background-color: var(--color-primary);
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .badge .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .badge .content .header {
      width: 248px;
      height: 16px;
      background-color: var(--color-accent);
    }
    .badge .content .header p {
      padding-top: 1px;
      font-size: 11px;
      font-weight: 400;
    }
    .badge .content .name p {
      font-size: 16px;
      max-width: 128px;
      font-weight: 300;
    }
    .badge .content .icon img {
      max-width: 54px;
      max-height: 54px;
      padding-right: 12px;
    }
    .badge .content .author p {
      font-size: 12px;
      font-weight: 400;
    }
  `;

  constructor() {
    super();
    this.badgeTitle = 'badgeTitle1';
    this.badgeDesc = 'badgeDesc1';
    this.badgeImg = 'badgeImg1';
    this.author = 'author1';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="badge">
          <div class="accent"></div>
          <div class="content">
            <div class="header">
              <p>${this.badgeTitle}</p>
            </div>
            <div
              style="display: flex; flex-direction: row; justify-content: space-between; padding-top: 4px;"
            >
              <div class="name">
                <p>${this.badgeText}</p>
              </div>
              <div class="icon">
                <simple-icon
                  accent-color="${this.accent}"
                  icon="${this.badgeImg}"
                >
                </simple-icon>
              </div>
            </div>
            <div class="author">
              <p>${this.author}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('badges-list', BadgesList);
