const httpProxy = require("http-proxy");

const ldpPubSubServer = httpProxy.createProxyServer({
  target: process.env.MIX_LDP_APP,
});

module.exports = ldpPubSubServer;
