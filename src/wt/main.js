import * as os from 'node:os';
import { Worker } from 'node:worker_threads';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COUNTER = 10;

const calculate = async (data, workerPath) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath);
        worker.postMessage(data);

        worker.on('message', (response) => {
            resolve(response);
        });

        worker.on('error', (error) => {
            reject({ status: 'error', data: null });
        });
    });
};

const performCalculations = async () => {
    const results = [];
    const coreCount = os.cpus().length;
    const workerPath = path.join(__dirname, 'worker.js');

    for (let i = 0; i < coreCount; i++) {
        const value = COUNTER + i;
        const response = await calculate(value, workerPath);
        results.push(response);
    }
    console.log(results);
};

await performCalculations();
