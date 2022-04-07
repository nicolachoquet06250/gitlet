import * as files from '../files';

export const isHeadDetached = () => files.read(files.gitletPath('HEAD')).match('refs') === null;