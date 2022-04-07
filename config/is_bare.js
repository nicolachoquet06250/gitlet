import * as config from '../config';

export const isBare = () => config.read().core[""].bare === "true";