const upd = require("dgram");

const server = upd.createSocket("udp4");
const port = 2222;

server.on("listening", () => {
  // Server address isn't using for listen
  const address = server.address();

  console.log(address);
});

server.on("message", (message, info) => {
  console.log(message.toString());

  const response = Buffer.from("Message Received");

  // sending back response to client
  server.send(response, info.port, info.address, (err) => {
    if (err) {
      console.error("Failed to send response !!");
    } else {
      console.log("Response send successfully");
    }
  });
});

server.bind(port);
