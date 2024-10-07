import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    try {
        const files = await fsPromises.readdir(path.join(__dirname, 'files'));
        for (const file of files) {
            console.log(file);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
