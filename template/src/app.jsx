/* eslint-disable react/prefer-stateless-function */

import { Component, h, render } from "preact";

export class App extends Component {
  render() {
    return (
      <div className="spl">
        Welcome to the world of developing Bing homepage special experience!
      </div>
    );
  }
}

if (
  typeof window !== "undefined" &&
  window.document &&
  location.href.indexOf("search") < 0
) {
  const elem = document.createElement("div");
  (document.querySelector(".hp_body") || document.body).appendChild(elem);
  render(<App />, elem);
}
