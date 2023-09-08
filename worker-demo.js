const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename, { workerData: "hello" });
  worker.on("message", (msg) => console.log(`Worker message received: ${msg}`));
  worker.on("error", (err) => console.error(err));
  worker.on("exit", (code) => console.log(`Worker exited with code ${code}.`));
} else {
  const data = workerData;
  parentPort.postMessage(`You said \"${data}\".`);
}
