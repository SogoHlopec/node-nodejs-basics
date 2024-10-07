import * as process from 'node:process';

const parseArgs = () => {
    try {
        const args = process.argv;
        args.forEach((item, index) => {
            if (item.startsWith('--')) {
                const propName = item.replace('--', '');
                const value = args[index + 1];
                console.log(`${propName} is ${value}`);
            }
        });
    } catch (error) {
        throw error;
    }
};

parseArgs();
