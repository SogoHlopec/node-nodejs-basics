import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    try {
        const stream = fs.createWriteStream(
            path.join(__dirname, '/files/fileToWrite.txt')
        );
        process.stdin.pipe(stream);
    } catch (error) {
        throw error;
    }
};

await write();
