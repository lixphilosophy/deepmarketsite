import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

import { createServer } from "http";

import { StaticRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './widgets/App';

// createServer((req, res) => {
//   const context = {};

//   const html = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url} context={context}>
//       <App />
//     </StaticRouter>
//   );

//   if (context.url) {
//     res.writeHead(301, {
//       Location: context.url
//     });
//     res.end();
//   } else {
//     res.write(`
//       <!doctype html>
//       <div id="app">${html}</div>
//     `);
//     res.end();
//   }
// }).listen(80);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();