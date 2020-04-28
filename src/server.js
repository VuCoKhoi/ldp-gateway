const http = require("http");
require("dotenv").config();

const { routerWeb, routerWs } = require("./router");

const PORT = process.env.PORT;

const proxyServer = http.createServer(routerWeb);

proxyServer.on("upgrade", routerWs);

proxyServer.listen(PORT, () => {
  console.log("proxy server running on", PORT);
});
