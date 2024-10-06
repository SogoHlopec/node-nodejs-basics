import * as process from 'node:process';
import * as stream from 'node:stream';

const transform = async () => {
    try {
        const reverseString = new stream.Transform({
            transform(chunk, enc, callback) {
                const string =
                    chunk.toString().trim().split('').reverse().join('') + '\n';
                this.push(string);
                callback();
            },
        });
        process.stdin.pipe(reverseString).pipe(process.stdout);
    } catch (error) {
        throw error;
    }
};

await transform();
