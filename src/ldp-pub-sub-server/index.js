const httpProxy = require("http-proxy");

const ldpPubSubServer = httpProxy.createProxyServer({
  target: process.env.MIX_LDP_PUBSUB_SERVER,
});

module.exports = ldpPubSubServer;
