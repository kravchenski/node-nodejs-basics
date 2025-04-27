import { fileURLToPath } from 'url';
import * as path from 'path';
import { access, constants, readFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt')


const read = async () => {
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            throw Error("FS operation failed")
        }
        readFile(filePath, (err, data) => {
            if (err) throw err;
            console.log(data.toString("utf-8"));
        })
    })
};

await read();