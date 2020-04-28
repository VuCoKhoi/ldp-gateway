const ldpServer = require("./ldp-server");
const socketServer = require("./socket-server");
const ldpPubSubServer = require("./ldp-pub-sub-server");
const ldpApp = require("./ldp-app");

const routerWeb = (req, res) => {
  if (req.url.includes("graphql")) {
    ldpServer.web(req, res, { ws: true });
  } else {
    ldpApp.web(req, res);
  }
};

const routerWs = (req, socket, upgradeHead) => {
  if (req.url.includes("graphql")) {
    ldpPubSubServer.ws(req, socket, upgradeHead);
  }
  if (req.url.includes("socket")) {
    socketServer.ws(req, socket, upgradeHead);
  }
};

module.exports = { routerWeb, routerWs };
