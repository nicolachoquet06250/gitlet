import {isBare} from './index.js';

export const assertNotBare = () => {
    if (isBare()) {
        throw new Error("this operation must be run in a work tree");
    }
};