const ldpServer = require("./ldp-server");
const socketServer = require("./socket-server");
const ldpPubSubServer = require("./ldp-pub-sub-server");
const ldpApp = require("./ldp-app");

const routerWeb = (req, res) => {
  console.log("aaa", req.url);
  if (req.url.includes("graphql")) {
    ldpServer.web(req, res, { ws: true });
  } else if (req.url.includes("socket")) {
    socketServer.web(req, res);
  } else {
    ldpApp.web(req, res);
  }
};

const routerWs = (req, socket, upgradeHead) => {
  console.log(req.url);

  if (req.url.includes("graphql")) {
    ldpPubSubServer.ws(req, socket, upgradeHead);
  }
  if (req.url.includes("socket")) {
    socketServer.ws(req, socket, upgradeHead);
  }
};

module.exports = { routerWeb, routerWs };
