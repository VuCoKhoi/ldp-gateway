const httpProxy = require("http-proxy");
const errorProxy = require("../errorProxy");

const socketServer = httpProxy.createProxyServer({
  target: process.env.MIX_SOCKET_SERVER,
  changeOrigin: true,
});

errorProxy(socketServer);

module.exports = socketServer;
