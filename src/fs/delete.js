import { fileURLToPath } from 'url';
import * as path from 'path';
import { access, constants, unlink } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt')


const remove = async () => {
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            throw Error("FS operation failed")
        }
        unlink(filePath, (err) => {
            if (err) throw err;
            console.log('Remove complete!');
        })
    })

};

await remove();