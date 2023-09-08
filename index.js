const worker = new Worker("worker.js");

const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", () => {
  worker.postMessage("count sum");
});

worker.onmessage = (message) => {
  alert(`sum is ${message.data}`);
};

bgButton.addEventListener("click", () => {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
});
