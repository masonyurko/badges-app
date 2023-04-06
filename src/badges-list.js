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
      color: { type: String },
    };
  }

  static get styles() {
    return css`
      .page {
        background-color: #e9ecf3;
        display: inline-block;
      }

      simple-icon {
        width: 100px;
        height: 100px;
      }

      .wrapper {
        background-color: {color};
        color: white;
        padding: 2px 2px 2px 20px;
        text-align: center;
        width: 400px;
        height: auto;
        border-radius: 5px;
      }

      .badge-text {
        background-color: white;
        color: black;
        text-align: left;
        padding: 2px 2px 2px 5px;
        font-size: 20px;
        font-family: 'effra', sans-serif;
        font-weight: 300;
      }

      .badge-title {
        background-color: lightblue;
        color: white;
        text-align: left;
        padding: 10px 8px;
        border-radius: 5px;
        color: black;
      }

      .bot-block {
        padding: 10px;
      }

      .heading {
        font-size: 32px;
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
    this.badgeTitle = 'My Badge';
    this.badgeDesc = 'badgeDesc';
    this.badgeImg = 'icon image';
    this.author = 'author';
    this.color = 'background color';
  }

  render() {
    return html`
      <div class="wrapper">
        
        <div class="bot-block">
          <div class="color"></div>
            <div class="badge-title">
              <p>${this.badgeTitle}</p>
            </div>
              <div class="badge-text">
                <p>${this.badgeDesc}</p>
              </div>
              <div class="badge-img">
                <simple-icon class="course-icon" accent-color="blue"
                  icon="${this.badgeImg}"
                >
                </simple-icon>
              </div>
            <div class="author">
              <span>Creator: ${this.author}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('badges-list', BadgesList);
