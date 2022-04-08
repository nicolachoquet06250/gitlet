import { headBranchName } from './index.js';
import * as config from '../config/index.js';

export const isCheckedOut = branch => !config.isBare() && headBranchName() === branch;