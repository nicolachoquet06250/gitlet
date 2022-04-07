/**
 * @param {string} string
 * @returns {string}
 */
export const hash = string => {
    let hashInt = 0;
    for (let i = 0; i < string.length; i++) {
        hashInt = hashInt * 31 + string.charCodeAt(i);
        hashInt = hashInt | 0;
    }

    return Math.abs(hashInt).toString(16);
};