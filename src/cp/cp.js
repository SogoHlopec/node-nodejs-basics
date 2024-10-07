import * as child_process from 'node:child_process';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    child_process.spawn(
        'node',
        [path.join(__dirname, 'files/script.js'), ...args],
        {
            stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
        }
    );
};

// Put your arguments in function call to test this functionality
spawnChildProcess([
    'someArgument1',
    'someArgument2',
    'someArgument3',
    'someArgument4',
]);
