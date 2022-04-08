import fs from 'fs';
import path from 'path';
import { init, remote, fetch } from './index.js';
import * as refs from '../refs/index.js';
import * as merge from '../merge/index.js';
import * as util from '../util/index.js';
import * as files from '../files/index.js';

export const clone = (remotePath, targetPath, options = {}) => {
    if (remotePath === undefined || targetPath === undefined) {
        throw new Error('You must specify remote path and target path');
    } else if (!fs.existsSync(remotePath) || util.onRemote(remotePath)(files.inRepo)) {
        throw new Error('repository ' + remotePath + ' does not exists');
    } else if (fs.existsSync(targetPath) && fs.readdirSync(targetPath).length > 0) {
        throw new Error(targetPath + ' already exists and is not empty');
    }

    remotePath = path.resolve(process.cwd(), remotePath);

    if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath);
    }

    util.onRemote(targetPath)(() => {
        init(options);

        remote('add', 'origin', path.relative(process.cwd(), remotePath));

        const remoteHeadHash = util.onRemote(remotePath)(refs.hash, 'master');

        if (remoteHeadHash !== undefined) {
            fetch('origin', 'master');
            merge.writeFastForwardMerge(undefined, remoteHeadHash);
        }
    });

    return `Cloning into ${targetPath}`;
};