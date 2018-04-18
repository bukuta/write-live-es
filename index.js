console.warn('module.index.js');

import add , { Rect,Cube } from './modules/a.js';
console.log(add(1, 2));

import App from './modules/main.js';
console.log(App);

let h = React.createElement;

let $app = document.getElementById('app');

ReactDOM.render(h(App,{}),$app);

async function run() {
  let a = new Rect(3, 4);
  let area = await a.area();
  console.log(area);

  let c = new Cube(3);
  let area2 = await c.area();
  console.log(area2);
}

run();

