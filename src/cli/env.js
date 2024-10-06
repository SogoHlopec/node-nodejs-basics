import * as process from 'node:process';


const parseEnv = () => {
    try {
        const keys = Object.keys(process.env);
        keys.forEach(item => {
            if (item.startsWith('RSS_')) {
                console.log(`${item}=${process.env[item]}`);
            }
        });
    } catch (error) {
        throw error;
    }
};

parseEnv();
