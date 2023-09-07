const EventEmitter = require("events");

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
