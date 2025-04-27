import { argv } from 'node:process';
const parseArgs = () => {
    const argumentsArr = argv.slice(2);
    for (let i = 0; i < argumentsArr.length; i += 2) {
        const key = argumentsArr[i].slice(2);
        const value = argumentsArr[i + 1];
        console.log(`${key} is ${value}`);
    };
}
parseArgs();