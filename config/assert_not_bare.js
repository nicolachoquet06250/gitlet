import {isBare} from './index';

export const assertNotBare = () => {
    if (isBare()) {
        throw new Error("this operation must be run in a work tree");
    }
};