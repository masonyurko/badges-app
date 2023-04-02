import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class BadgesApp extends LitElement {
  static properties = {
    searchBoxDesc: { type: String },
    badgesDesc: {type: String},
    explore: {type: String},
    input: {type: String}
  };


  constructor() {
    super();
    this.searchBoxDesc = 'Explore our content in a self guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.';
    this.badgesDesc = 'Looking for something brand spankin new? Here are the most recently added badges!'
    this.explore = 'Explore';
    
  }

  handleInput(e) {
    this.input = e.target.value;
  }

  static styles = css`

      .app-container {
        padding-top: 50px;
        background-color: lightgray;
        padding-bottom: 60px;
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

    

    

  `;

  render() {
    return html`
      <main>

      <div class="app-container">
        <label class='explore'>${this.explore}</label>
        <div class="search-container">
          <div class="search-desc">${this.searchBoxDesc}</div>
          <input type="text" id="getme" @input="${this.handleInput}" placeholder="Search Content, Topics and People"/>
          <simple-icon accent-color="black" icon="search">
          </simple-icon>
        </div>
        
      <div class="badges-container">
          <label class="badges-desc">${this.badgesDesc}</label>
      </div>

        <div>
          <div class="input">${this.input}</div>
        </div>

      </div>

      </main>
    `;
  }

}
customElements.define('badges-app', BadgesApp);
