function findLargest(arr) {
    if (!Array.isArray(arr)) return false;
    if (arr.length < 1) return null;
    let max = -Infinity
  
    for (let n of arr) {
      if (!Number.isFinite(n) || isNaN(n)){
        return false;
      }
      max=Math.max(max,n)
    }
    return max;
  }
  
  module.exports = { findLargest };
  