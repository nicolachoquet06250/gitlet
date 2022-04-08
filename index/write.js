import * as files from '../files/index.js';

export const write = index => {
    const indexStr = Object.keys(index)
        .map(k => k.split(',')[0] + ' ' + k.split(',')[1] + ' ' + index[k])
        .join('\n') + '\n';
    files.write(files.gitletPath('index'), indexStr);
};