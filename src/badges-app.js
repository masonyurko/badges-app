import { LitElement, html, css } from 'lit';
import './badges-list.js';
import '../api/badges.js';

class BadgesApp extends LitElement {
  static get properties() {
    return {
      badges: { type: Array },
    };
  }

  constructor() {
    super();
    this.badges = [];
    this.updateBadge();
  }

  updateBadge() {
    const address = '../api/badges';
    fetch(address)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then(data => {
        this.badges = data;
      });
  }

  static styles = css`
    .results {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 10px;
      margin-left: 10px;
      margin-right: 0px;
    }

    .container {
      width: 100%;
      border: 2px solid black;
      display: inline-flex;
    }
  `;

  render() {
    return html`
    <div class="container"></div>
        <div class="results">
          ${this.badges.map(
            badge => html`
              <badges-list
                name="${badge.badgeTitle}"
                description="${badge.badgeDesc}"
                image="${badge.badgeImg}"
                author="${badge.author}"
                color="${badge.color}"
              >
              </badges-list>
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('badges-app', BadgesApp);
