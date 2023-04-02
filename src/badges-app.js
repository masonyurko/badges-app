import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class BadgesApp extends LitElement {
  static get properties() {
    return {
      badgeTitle: {
        type: String,
        reflect: true,
      },
      badgeDesc: {
        type: String,
      },
      badgeImg: {
        type: String,
      },
      author: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      .wrapper {
        width: 400px;
        border: 2px solid black;
        display: inline-flex;
      }

      .image {
        width: 400px;
      }
    `;
  }

  constructor() {
    super();
    this.badgeImg = new URL('../assets/');
    this.badgeTitle = 'Technology and Information';
    this.badgeDesc = 'APA Style Citations: Introduction';
    this.author = 'Victoria Raish';
  }

  render() {
    return html` <div class="wrapper">
      <div class="container"></div>
    </div>`;
  }
}
