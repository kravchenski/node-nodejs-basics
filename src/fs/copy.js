import { fileURLToPath } from 'url';
import * as path from 'path';
import { access, constants, copyFile, mkdir, readdir } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesFilePath = path.join(__dirname, 'files')
const filesCopyFilePath = path.join(__dirname, 'files_copy')

const copy = async () => {
    access(filesFilePath, constants.F_OK, (err) => {
        if (err) {
            throw Error("FS operation failed")
        }
    })
    access(filesCopyFilePath, constants.F_OK, (err2) => {
        if (!err2) {
            throw Error("FS operation failed")
        }
        mkdir(filesCopyFilePath, (err) => {
            if (err) throw err;
            console.log("Files_copy create succesfully!");
            readdir(filesFilePath, (err, files) => {
                if (err) throw err;
                files.forEach((el) => {
                    copyFile(`${filesFilePath}/${el}`, `${filesCopyFilePath}/${el}`, (err) => {
                        if (err) throw err;
                    })
                })
                console.log("All files copy succesfully!");
            })
        })

    })
};

await copy();
