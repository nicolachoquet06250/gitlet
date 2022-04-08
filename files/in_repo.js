import { gitletPath } from './index.js';

export const inRepo = () => gitletPath() !== undefined;