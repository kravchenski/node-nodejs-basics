import { fileURLToPath } from 'url';
import * as path from 'path';
import { access, constants, renameSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'wrongFilename.txt')
const newfilePath = path.join(__dirname, 'files', 'properFilename.md')

const rename = async () => {
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            throw Error("FS operation failed")
        }
        renameSync(filePath, newfilePath, (err) => {
            if (err) throw err;
            console.log('Rename complete!');
        })
    })
};

await rename();