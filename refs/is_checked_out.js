import { headBranchName } from './index';
import * as config from '../config';

export const isCheckedOut = branch => !config.isBare() && headBranchName() === branch;