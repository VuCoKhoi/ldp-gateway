const httpProxy = require("http-proxy");

const ldpServer = httpProxy.createProxyServer({
  target: process.env.MIX_LDP_SERVER,
});

module.exports = ldpServer;
