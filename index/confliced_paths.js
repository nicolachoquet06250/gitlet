import {keyPieces, read} from "./index.js";

export const conflictedPaths = () => {
    const idx = read();
    return Object.keys(idx)
        .filter(k => keyPieces(k).stage === 2)
        .map(k => keyPieces(k).path);
};