import { html } from 'lit';
import '../src/badges-app.js';


export default {
  title: 'BadgesApp',
  component: 'badges-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <badges-app
      style="--badges-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </badges-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
