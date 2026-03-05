function findLargest(arr) {
  if (!Array.isArray(arr)) return false;

  if (arr.length === 0) {
    return null;
  }

  let maximum = arr[0];
  for (let val of arr) {
    if (typeof val !== "number" || !Number.isFinite(val)) {
      return false;
    }
    if (val > maximum) {
      maximum = val;
    }
  }
  return maximum;
}
console.log(findLargest([2, 3, 4]));

module.exports = { findLargest };
