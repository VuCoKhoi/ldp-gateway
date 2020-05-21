module.exports = (proxySerer) =>
  proxySerer.on("error", function (err, req, res) {
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    console.log("error", err);

    res.end(
      "Something went wrong. And we are reporting a custom error message."
    );
  });
