import {flatten} from './index';

export const flatten = arr => arr.reduce((a, e) => a.concat(e instanceof Array ? flatten(e) : e), []);