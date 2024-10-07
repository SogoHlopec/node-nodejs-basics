import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    try {
        await fsPromises.access(
            path.join(__dirname, '/files/fileToRemove.txt')
        );
        await fsPromises.unlink(
            path.join(__dirname, '/files/fileToRemove.txt')
        );
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();
