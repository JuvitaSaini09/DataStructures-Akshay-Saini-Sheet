/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    let sToT = new Map();
    let tToS = new Map();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (sToT.has(charS) && sToT.get(charS) !== charT) {
            return false;
        }

        if (tToS.has(charT) && tToS.get(charT) !== charS) {
            return false;
        }

        sToT.set(charS, charT);
        tToS.set(charT, charS);
    }

    return true;
};