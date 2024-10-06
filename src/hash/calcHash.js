import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import * as crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    try {
        const hash = await crypto.createHash('sha256');

        const filehandle = await fsPromises.open(
            path.join(__dirname, '/files/fileToCalculateHashFor.txt')
        );
        const stream = await filehandle.createReadStream();
        stream.on('data', (chunk) => {
            hash.update(chunk);
        });
        stream.on('end', () => {
            console.log(`${hash.digest('hex')}`);
        });
    } catch (error) {
        throw error;
    }
};

await calculateHash();
