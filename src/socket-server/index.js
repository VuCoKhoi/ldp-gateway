const httpProxy = require("http-proxy");

const socketServer = httpProxy.createProxyServer({
  target: process.env.MIX_SOCKET_SERVER,
});

module.exports = socketServer;
