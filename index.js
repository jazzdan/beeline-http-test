require("honeycomb-beeline")({
  writeKey: "YOUR_API_KEY",
  dataset: "my-node-distributed-app",
  serviceName: "my-node-service",
  transmission: "console",
});

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const beeline = require("honeycomb-beeline")();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  beeline.addContext({ statusCode: res.statusCode });
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
