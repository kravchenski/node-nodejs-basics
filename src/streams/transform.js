import { stdin, stdout } from 'node:process';
import { Transform } from 'stream'

const transform = async () => {
    const reverseStringTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('') + "\n\n";
            this.push(reversed);
            callback();
        }
    });
    process.stdin.pipe(reverseStringTransform).pipe(process.stdout)
};

await transform();