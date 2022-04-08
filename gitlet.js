#!/usr/local/bin/node

import {runCli} from "./runCli/index.js";

try {
    const result = runCli(process.argv);
    if (result !== undefined) {
        console.log(result);
    }
} catch (e) {
    console.error(e.toString());
}

