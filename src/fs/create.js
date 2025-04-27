import { fileURLToPath } from 'url';
import * as path from 'path';
import { constants, writeFile, access } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt')

const create = async () => {
    access(filePath, constants.F_OK, (err) => {
        if (!err) {
            throw Error("FS operation failed")
        }
        writeFile(filePath, "I am fresh and young", "utf-8", (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    })
};

await create();