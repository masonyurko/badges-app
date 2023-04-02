import { LitElement, html, css } from 'lit-element';
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
    };
  }

  constructor() {
    super();
    this.badges = [];
    this.badgeTitle = [];
    this.badgeDesc = [];
    this.badgeImg = [];
    this.updateBadges();
  }

  updateBadges() {
    const address = new URL('../api/badges', import.meta.url).href;
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

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .wrapper {
        border: 2px solid black;
        display: flex;
      }
      .item {
        display: inline-flex;
      }
    `;
  }

  render() {
    return html`
      <h2>${this.badges}</h2>
      <div class="wrapper">
        ${this.badges.map(
          badge => html`
            <div class="item">
              <badges-app
                name="${badge.badgeTitle}"
                description="${badge.badgeDesc}"
                image="${badge.badgeImg}"
                author="${badge.author}"
              ></badges-app>
            </div>
          `
        )}
      </div>
    `;
  }
}
