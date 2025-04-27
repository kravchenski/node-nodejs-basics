import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    const input = createReadStream(filePath)
    input.on("readable", () => {
        const data = input.read()
        if (data) {
            stdout.write(data)
        }
        else {
            console.log("");
        }
    })
};

await read();