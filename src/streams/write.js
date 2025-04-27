import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt')

const write = async () => {
    const input = createWriteStream(filePath)
    stdin.on("data", (data) => {
        const userInput = data.toString()
        input.write(userInput)
    });
};

await write();