import { env } from 'node:process';


const parseEnv = () => {
    let rssVariables = "";
    for (const key in env) {
        if (key.startsWith("RSS_")) {
            rssVariables += `${key}=${env[key]}; `;
        }
    }
    console.log(rssVariables.trim());
};

parseEnv();