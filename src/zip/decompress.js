import { createUnzip } from 'node:zlib'
import { createReadStream, createWriteStream } from 'node:fs'
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const archivefilePath = path.join(__dirname, 'files', 'archive.gz')
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt')

const decompress = async () => {
    const unzip = createUnzip()
    const inp = createReadStream(archivefilePath)
    const out = createWriteStream(filePath)
    inp.pipe(unzip).pipe(out)
};

await decompress();