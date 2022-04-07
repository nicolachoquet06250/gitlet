import {inRepo} from './index';

export const assertInRepo = () => {
    if (!inRepo()) {
        throw new Error("not a Gitlet repository");
    }
};