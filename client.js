const upd = require("dgram");

const client = upd.createSocket("udp4");

const port = 2222;
const hostName = "localhost";

client.on("message", (message, info) => {
  //get the information about server address, port, and size of packet received.

  console.log(info);

  //read message from server
  console.log(message.toString());
});

const packet = Buffer.from("This message from the client");

client.send(packet, port, hostName, (err) => {
  if (err) {
    console.error("Failed to send packet!!");
  } else {
    console.log("Packet is sent!!");
  }
});
