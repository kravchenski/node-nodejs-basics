import { fileURLToPath } from 'url';
import * as path from 'path';
import { access, constants, readdir } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files')

const list = async () => {
    access(filePath, constants.F_OK, (err2) => {
        if (err2) {
            throw Error("FS operation failed")
        }
        readdir(filePath, (err, files) => {
            if (err) throw err;
            console.log(files)
        })
    })



};

await list();