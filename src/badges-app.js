import { LitElement, html, css } from 'lit';


class BadgesApp extends LitElement {
  static properties = {
    searchBoxDesc: { type: String },
    badgesDesc: {type: String}
  };


  constructor() {
    super();
    this.searchBoxDesc = 'Explore our content in a self guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.';
    this.badgesDesc = 'Looking for something brand spankin new? Here are the most recently added badges?'
    this.
  }

  static styles = css`
      .search-container {
      margin: 10px;
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
      border: solid black;
      background-color: light grey;
      font-family: sans-serif;
      }



      input {
        padding: 5px;
        display: block;
        border: solid black;
        width: 300px;
      }

      .search-desc {
        padding-bottom: 15px;
      }

      .badges-container {
      margin: 10px;
      padding: 10px;
      border: solid black;
      background-color: light grey;
      font-family: sans-serif;
      }

      

      


  `;

  render() {
    return html`
      <main>
      
      <div class="app-container">
        <div class="search-container">
          <div class="search-desc">${this.searchBoxDesc}</div>
          <input type="text" id="getme" placeholder="Search Content, Topics and People" />
        </div>
        
        <div class="badges-container">
          <label>${this.badgesDesc}</label>

        </div>
      </div>

      </main>
    `;
  }

  
}

customElements.define('badges-app', BadgesApp);
