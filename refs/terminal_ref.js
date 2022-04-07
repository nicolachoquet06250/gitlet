import { isRef, toLocalRef, isHeadDetached } from './index';
import * as files from '../files';

export const terminalRef = ref => {
    if (ref === 'HEAD' && !isHeadDetached()) {
        return files.read(files.gitletPath('HEAD')).match('ref: (refs/heads/.+)')[1];
    } else if (isRef(ref)) {
        return ref;
    }
    return toLocalRef(ref);
};