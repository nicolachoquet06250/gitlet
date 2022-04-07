import {type} from "./index";

export const treeHash = str => {
    if (type(str) === 'commit') {
        return str.split(/\s/)[1];
    }
};