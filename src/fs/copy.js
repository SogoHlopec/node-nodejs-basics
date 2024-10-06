import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    try {
        await fsPromises.mkdir(path.join(__dirname, 'files_copy'));
        const files = await fsPromises.readdir(path.join(__dirname, 'files'));
        for (const file of files) {
            const existingFile = path.join(__dirname, 'files', file);
            const fileCopy = path.join(__dirname, 'files_copy', file);
            await fsPromises.copyFile(existingFile, fileCopy);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
