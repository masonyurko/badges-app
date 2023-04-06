import { LitElement, html, css } from 'lit';
import './badges-list.js';
import '../api/badges.js';

class BadgesApp extends LitElement {
  static get properties() {
    return {
      badges: { type: Array },
      searchBoxDesc: { type: String },
      badgesDesc: { type: String },
      explore: { type: String },
      input: { type: String },
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.badges = [];
    this.updateBadge();
    this.searchBoxDesc =
      'Explore our content in a self guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.';
    this.badgesDesc =
      'Looking for something brand spankin new? Here are the most recently added badges!';
    this.explore = 'Explore';
    this.placeholder = 'Search Content, Topics and People';
  }

  handleInput(e) {
    this.input = e.target.value;
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
      width: 800px;
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
          <div class="search-bar">
            <simple-icon accent-color="black" icon="search"> </simple-icon>
            <input
              type="text"
              id="getme"
              @input="${this.handleInput}"
              placeholder="${this.placeholder}"
            />
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
          <div class="input">${this.input}</div>
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
