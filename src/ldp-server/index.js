const httpProxy = require("http-proxy");
const errorProxy = require("../errorProxy");

const ldpServer = httpProxy.createProxyServer({
  target: process.env.MIX_LDP_SERVER,
  changeOrigin: true,
});

errorProxy(ldpServer);

module.exports = ldpServer;
