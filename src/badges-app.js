import { LitElement, html, css } from 'lit';
import './badges-list.js';
import '../api/badges.js';
import './search-bar.js';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

class BadgesApp extends LitElement {
  static get properties() {
    return {
      badges: { type: Array },
      searchBoxDesc: { type: String },
      badgesDesc: { type: String },
      explore: { type: String },
      input: { type: String },
    };
  }

  constructor() {
    super();
    this.badges = [];
    this.updateBadge().then(results => {
      this.badges = results;
    });
    this.searchBoxDesc =
      'Explore our content in a self guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.';
    this.badgesDesc =
      'Looking for something brand spankin new? Here are the most recently added badges!';
    this.explore = 'Explore';
  }

  // eslint-disable-next-line class-methods-use-this
  async updateBadge(value = '') {
    const address = `/api/badges?search=${value}`;
    const results = await fetch(address)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      // eslint-disable-next-line arrow-body-style
      .then(data => {
        return data;
      });

    return results;
  }

  async _handleSearchEvent(e) {
    const term = e.detail.value;
    this.badges = await this.updateBadge(term);
  }

  static styles = css`
    .searchBar {
      width: 450px;
      height: 50px;
    }
    .app-container {
      padding-top: 50px;
      background-color: lightgray;
      padding-bottom: 500px;
    }
    .explore {
      font-size: 36px;
      font-family: sans-serif;
      padding-left: 185px;
    }
    .search-desc {
      font-size: 25px;
      padding-bottom: 15px;
    }
    .search-container {
      margin: 10px;
      margin-right: 220px;
      margin-left: 185px;
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
      background-color: white;
      font-family: sans-serif;
    }

    input {
      padding: 5px;
      display: inline-block;
      width: 1250px;
      height: 20px;
    }

    .badges-desc {
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 20px;
    }
    .badges-container {
      margin: 10px;
      padding-top: 10px;
      padding-right: 10px;
      padding-left: 10px;
      padding-bottom: 200px;
      margin-left: 185px;
      margin-right: 220px;
      background-color: white;
      font-family: sans-serif;
    }

    .badgeDesc {
      font-size: 24px;
      font-family: sans-serif;
      overflow-wrap: break-word;
    }

    .results {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .container {
      width: 100%;
      display: inline-flex;
    }
  `;

  render() {
    return html`
      <div class="container"></div>
      <div class="app-container">
        <label class="explore">${this.explore}</label>
        <div class="search-container">
          <div class="search-desc">${this.searchBoxDesc}</div>
          <div class="search">
            <search-bar
              @value-changed="${this._handleSearchEvent}"
            ></search-bar>
          </div>
        </div>
        <div class="badges-container">
          <label class="badges-desc">${this.badgesDesc}</label>
          <div class="results">
            ${this.badges.map(
              badge => html`
              <badges-list
                badgeTitle="${badge.badgeTitle}"
                badgeDesc="${badge.badgeDesc}"
                badgeImg="${badge.badgeImg}"
                author="${badge.author}"
                color="${badge.color}"
              >
              </badges-list>
              </div>
              <div>
            </div>
        `
            )}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('badges-app', BadgesApp);
