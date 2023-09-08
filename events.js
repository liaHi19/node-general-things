const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Uhu");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} items in the stock`);
});
myEmitter.emit("newSale", 9);

////////////

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is listening");
});
