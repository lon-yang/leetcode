// https://leetcode.com/problems/longest-uncommon-subsequence-i/#/description

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
};

console.log(findLUSlength('aba', 'aba'));
console.log(findLUSlength('abc', 'sas'));