import { LitElement, html, css } from 'lit';
import './badges-list.js';

class BadgesApp extends LitElement {
  static get properties() {
    return {
      badges: { type: Array },
    };
  }

  static styles = css`
    .results {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }
  `;

  constructor() {
    super();
    this.badges = [];
    this.populate();
  }

  populate() {
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

  render() {
    return html`
      <div class="results">
        ${this.badges.map(
          badge => html`
            <badges-list
              name="${badge.badgeTitle}"
              description="${badge.badgeDesc}"
              image="${badge.badgeImg}"
              author="${badge.author}"
            ></badges-list>
          `
        )}
      </div>
    `;
  }
}

customElements.define('badges-app', BadgesApp);
