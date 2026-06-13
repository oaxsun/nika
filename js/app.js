import { HomeScreen } from './screens/home.js';

const app = document.querySelector('#app');

function render() {
  app.innerHTML = HomeScreen();
}

render();
