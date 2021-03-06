import nodePath from 'path';
import {workingCopyPath} from './index.js';

export const pathFromRepoRoot = path => nodePath.relative(workingCopyPath(), nodePath.join(process.cwd(), path));