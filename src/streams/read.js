import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import * as process from 'node:process';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    try {
        const filehandle = await fsPromises.open(
            path.join(__dirname, '/files/fileToRead.txt')
        );
        const stream = await filehandle.createReadStream();
        stream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
    } catch (error) {
        throw error;
    }
};

await read();
