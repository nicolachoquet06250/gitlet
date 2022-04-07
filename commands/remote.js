import path from 'path';
import * as config from '../config';
import * as util from '../util';
import * as files from '../files';

export const remote = (command, name, _) => {
    files.assertInRepo();

    if (command !== 'add') {
        throw new Error('unsupported');
    } else if (name in config.read()['remote']) {
        throw new Error("remote " + name + " already exists");
    }

    config.write(util.setIn(config.read(), ['remote', name, 'url', path]));
    return '\n';
};