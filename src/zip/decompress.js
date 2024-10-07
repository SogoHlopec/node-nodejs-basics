import * as zlib from 'node:zlib';
import * as stream from 'node:stream';
import * as fs from 'node:fs';

import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    try {
        const gunzip = zlib.createGunzip();
        const compressedFile = fs.createReadStream(
            path.join(__dirname, '/files/archive.gz')
        );
        const decompressedFile = fs.createWriteStream(
            path.join(__dirname, '/files/fileToCompress.txt')
        );

        stream.pipeline(compressedFile, gunzip, decompressedFile, (err) => {
            if (err) {
                console.error('Pipeline failed:', err);
            }
        });
    } catch (error) {
        throw error;
    }
};

await decompress();
