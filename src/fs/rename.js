import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    try {
        await fsPromises.access(
            path.join(__dirname, '/files/wrongFilename.txt')
        );

        try {
            await fsPromises.access(
                path.join(__dirname, '/files/properFilename.md')
            );
            throw new Error('FS operation failed');
        } catch (errorMd) {
            if (errorMd.code !== 'ENOENT') {
                throw errorMd;
            }

            await fsPromises.rename(
                path.join(__dirname, 'files/wrongFilename.txt'),
                path.join(__dirname, 'files/properFilename.md')
            );
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();
