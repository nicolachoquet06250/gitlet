import {isHeadDetached} from "./index";
import * as files from '../files';

export const headBranchName = () => {
    if (isHeadDetached()) {
        return files.read(files.gitletPath('HEAD')).match('refs/heads/(.+)')[1];
    }
};