const chalk = require("chalk");
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
    console.log(chalk.red("[Cluster]"), "Master process is now running.", process.pid);
    let workers = process.env.WEB_CONCURRENCY || os.cpus().length
    for (let i = 0; i < workers ; i++) {
        let worker = cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
        console.log(chalk.yellow("[Cluster]"), "Worker has died.", worker.process.pid);
        console.log(chalk.yellow("[Cluster]"), "Death was suicide:", worker.exitedAfterDisconnect);
        if (!worker.exitedAfterDisconnect) {
            let worker = cluster.fork();
        }
    });
} else {
    require("./server");
    console.log(chalk.red("[Worker]"), "Worker has started.", process.pid);
}