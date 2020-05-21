const httpProxy = require("http-proxy");
const errorProxy = require("../errorProxy");

const ldpPubSubServer = httpProxy.createProxyServer({
  target: process.env.MIX_LDP_PUBSUB_SERVER,
});

errorProxy(ldpPubSubServer);

module.exports = ldpPubSubServer;
