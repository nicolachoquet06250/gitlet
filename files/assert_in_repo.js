import {inRepo} from './index.js';

export const assertInRepo = () => {
    if (!inRepo()) {
        throw new Error("not a Gitlet repository");
    }
};