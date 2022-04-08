import * as config from '../config/index.js';

export const isBare = () => config.read().core[""].bare === "true";