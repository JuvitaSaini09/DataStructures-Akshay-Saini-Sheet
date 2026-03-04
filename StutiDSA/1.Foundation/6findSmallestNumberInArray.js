function findSmallest(arr) {
  if (!Array.isArray(arr)) return false;

  if (arr.length === 0) {
    return null;
  }

  let smallest = arr[0];
  for (let val of arr) {
    if (typeof val !== "number" || !Number.isFinite(val)) {
      return false;
    }
    if (val < smallest) {
      smallest = val;
    }
  }
  return smallest;
}

console.log(findSmallest([7, 2, 3]));
