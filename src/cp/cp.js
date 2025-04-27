import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptPath = path.join(__dirname, 'files', 'script.js')

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [scriptPath, ...args]);
    process.stdin.pipe(childProcess.stdin);
    
    childProcess.stdout.pipe(process.stdout);
    childProcess.on("exit", (code) => {
        console.log(`Child process exited with code ${code}`);
    });

    return new Promise((resolve) => {
        childProcess.on("close", resolve);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["aaaaaa", "bbbbbbbbbb"]);
