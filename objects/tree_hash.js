import {type} from "./index.js";

export const treeHash = str => {
    if (type(str) === 'commit') {
        return str.split(/\s/)[1];
    }
};