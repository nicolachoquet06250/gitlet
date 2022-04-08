import {type} from "./index.js";

export const parentHashes = str => {
    if (type(str) === 'commit') {
        return str.split('\n').filter(line => line.match(/^parent/))
            .map(line => line.split(' ')[1]);
    }
};