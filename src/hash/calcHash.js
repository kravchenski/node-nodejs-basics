import { fileURLToPath } from 'url';
import * as path from 'path';
import { createReadStream } from 'node:fs';
import * as crypto from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
const hash = crypto.createHash('sha256')

const calculateHash = async () => {
    const input = createReadStream(filePath)
    input.on('readable', () => {
        const data = input.read()
        if (data) {
            hash.update(data)
        }
        else {
            console.log(`${hash.digest('hex')}`);
        }
    })

};

await calculateHash();