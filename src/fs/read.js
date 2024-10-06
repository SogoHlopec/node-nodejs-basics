import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    try {
        const content = await fsPromises.readFile(
            path.join(__dirname, 'files/fileToRead.txt'),
            'utf8'
        );
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
