const React = require("react");
const Default = require("./layouts/Default");

function error404() {
  <Default>
    <main>
      <h1>ERROR 404</h1>
      <p>sorry, this page could not be found!</p>
    </main>
  </Default>;
}

module.exports = error404;
