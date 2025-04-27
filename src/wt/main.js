import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const numCores = cpus().length;
    const workers = [];
    const results = [];
    let currentValue = 10;

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(workerPath);
        workers.push(worker);

        worker.postMessage(currentValue++);

        const resultPromise = new Promise((resolve) => {
            worker.on('message', (message) => resolve(message));
            worker.on('error', () => resolve({ status: 'error', data: null }));
            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({ status: 'error', data: null });
                }
            });
        });

        results.push(resultPromise);
    }
    const finalResults = await Promise.all(results);
    console.log('Results:', finalResults);
    workers.forEach((worker) => worker.terminate());
};

await performCalculations();