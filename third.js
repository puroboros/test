const X = 3;
const callback = () => {
    console.log('finished!');
}
const callsQueue = [];
let runningCalls = 0;
const executePromise = async (promise) => {
    promise.then(() => {
        if(callsQueue.length) {
            const nextPromise = callsQueue.shift();
            executePromise(nextPromise);
        }
    })
}
const distanceHandler = async (p1, p2, cb) => {
    console.log('new promise entered');
    const promise = new Promise(resolve => setTimeout(() => {
        console.log('finished');
        resolve();
    }, 1000, 42));
    if(runningCalls < X){
        runningCalls ++;
        console.log('queue free, executing');
        executePromise(promise);
    } else {
        callsQueue.push(promise);
    }
    return promise;
}
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
distanceHandler(1, 2, callback);
