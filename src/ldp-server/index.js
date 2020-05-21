const httpProxy = require("http-proxy");
const errorProxy = require("../errorProxy");

const ldpServer = httpProxy.createProxyServer({
  target: process.env.MIX_LDP_SERVER,
});

errorProxy(ldpServer);

module.exports = ldpServer;
