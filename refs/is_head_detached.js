import * as files from '../files/index.js';

export const isHeadDetached = () => files.read(files.gitletPath('HEAD')).match('refs') === null;