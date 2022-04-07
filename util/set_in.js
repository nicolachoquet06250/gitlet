import {setIn} from './index';

export const setIn = (obj, arr) => {
    if (arr.length === 2) {
        obj[arr[0]] = arr[1];
    } else if (arr.length > 2) {
        obj[arr[0]] = obj[arr[0]] || {};
        setIn(obj[arr[0]], arr.slice(1));
    }

    return obj;
};