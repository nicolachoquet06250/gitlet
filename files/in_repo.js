import { gitletPath } from './index';

export const inRepo = () => gitletPath() !== undefined;