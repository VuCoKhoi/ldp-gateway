const httpProxy = require("http-proxy");
const errorProxy = require("../errorProxy");

const ldpPubSubServer = httpProxy.createProxyServer({
  target: process.env.MIX_LDP_PUBSUB_SERVER,
  changeOrigin: true,
});

errorProxy(ldpPubSubServer);

module.exports = ldpPubSubServer;
