import {write} from "./index.js";

export const writeCommit = (treeHash, message, parentHashes) =>
    write(`commit ${treeHash}\n${parentHashes.map(h => `parent ${h}\n`).join('')}Date: ${new Date().toString()}\n\n    ${message}\n`);