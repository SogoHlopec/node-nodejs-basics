import * as zlib from 'node:zlib';
import * as stream from 'node:stream';
import * as fs from 'node:fs';

import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    try {
        const gzip = await zlib.createGzip();
        const file = await fs.createReadStream(
            path.join(__dirname, '/files/fileToCompress.txt')
        );
        const compressedFile = await fs.createWriteStream(
            path.join(__dirname, '/files/archive.gz')
        );

        stream.pipeline(file, gzip, compressedFile, (err) => {
            if (err) {
                console.error('Pipeline failed:', err);
            }
        });
    } catch (error) {
        throw error;
    }
};

await compress();
