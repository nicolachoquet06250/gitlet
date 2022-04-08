import {isHeadDetached} from "./index.js";
import * as files from '../files/index.js';

export const headBranchName = () => {
    if (isHeadDetached()) {
        return files.read(files.gitletPath('HEAD')).match('refs/heads/(.+)')[1];
    }
};