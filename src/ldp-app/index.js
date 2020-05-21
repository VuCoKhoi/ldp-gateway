const httpProxy = require("http-proxy");
const errorProxy = require("../errorProxy");

const ldpApp = httpProxy.createProxyServer({
  target: process.env.MIX_LDP_APP,
});

errorProxy(ldpApp);

module.exports = ldpApp;
