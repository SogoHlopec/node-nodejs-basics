import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    try {
        await fsPromises.access(path.join(__dirname, '/files/fresh.txt'));
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }

        try {
            await fsPromises.writeFile(
                path.join(__dirname, '/files/fresh.txt'),
                'I am fresh and young'
            );
        } catch (writeError) {
            throw new Error(writeError);
        }
    }
};

await create();
