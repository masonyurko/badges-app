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
      badges: { type: Array },
      badgeTitle: { type: String },
      badgeDesc: { type: String },
      badgeImg: { type: String },
      author: { type: String },
      accent: { type: String },
    };
  }

  static get styles() {
    return css`
      .page {
        background-color: #e9ecf3;
        display: inline-block;
      }

      .wrapper {
        background-color: #3e98d3;
        color: white;
        padding: 2px 2px 2px 20px;
        text-align: center;
        width: 400px;
        height: auto;
        border-radius: 5px;
        display: inline-block;
      }

      .badge-text {
        background-color: white;
        color: black;
        text-align: left;
        padding: 0px 0px 0px 5px;
        word-break: break-word;
        font-size: 20px;
        font-family: 'effra', sans-serif;
        font-size: 24px;
        font-weight: 300;
      }

      .author {
        font-size: 13px;
      }

      .badge-title {
        background-color: lightblue;
        color: white;
        text-align: left;
        border-radius: 5px;
        color: black;
      }

      .heading {
        font-size: 32px;
      }

      .bot-block {
        color: black;
        padding: 0px 0px 0px 0px;
        margin: 50px;
        background-color: white;
        display: inline-block;
      }

      .badge-img {
        text-align: right;
        background-color: white;
      }

      .author {
        background-color: white;
        text-align: left;
        color: black;
        padding: 2px 2px 2px 5px;
      }
    `;
  }

  constructor() {
    super();
    this.badgeTitle = 'badge1';
    this.badgeDesc = 'badgeDesc';
    this.badgeImg = 'badgeImg';
    this.author = 'author1';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="bot-block">
          <div class="accent"></div>
          <div class="badge-text">
            <div class="badge-title">
              <p>${this.badgeTitle}</p>
            </div>
            <div
              style="display: flex; flex-direction: row; justify-content: space-between; padding-top: 4px;"
            >
              <div class="badge-text">
                <p>${this.badgeText}</p>
              </div>
              <div class="badge-img">
                <simple-icon
                  accent-color="${this.accent}"
                  icon="${this.badgeImg}"
                >
                </simple-icon>
              </div>
            </div>
            <div class="author">
              <p>Creator: ${this.author}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('badges-list', BadgesList);
