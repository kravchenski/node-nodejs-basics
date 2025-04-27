import { createGzip } from 'node:zlib'
import * as fs from 'node:fs'
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt')
const archivefilePath = path.join(__dirname, 'files', 'archive.gz')


const compress = async () => {
    const gzip = createGzip()
    const inp = fs.createReadStream(filePath)
    const out = fs.createWriteStream(archivefilePath)
    inp.pipe(gzip).pipe(out)
};

await compress();