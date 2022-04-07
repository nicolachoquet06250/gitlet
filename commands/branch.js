import { update_ref } from './update_ref';
import * as refs from '../refs';
import * as files from '../files';

export const branch = (name, options = {}) => {
    files.assertInRepo();

    if (name === undefined) {
        return Object.keys(refs.localHeads()).map(branch => (branch === refs.headBranchName() ? "* " : " ") + branch).join('\n') + '\n';
    } else if (refs.hash("HEAD") === undefined) {
        throw new Error(refs.headBranchName() + ' not a valid object name');
    } else if (refs.exists(refs.toLocalRef(name))) {
        throw new Error("A branch named " + name + " already exists");
    } else {
        update_ref(refs.toLocalRef(name), refs.hash("HEAD"));
    }
};