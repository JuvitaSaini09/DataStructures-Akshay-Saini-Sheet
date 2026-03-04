function findSmallest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  let smallestNum = Infinity;

  for (let n of arr) {
    if (typeof n !== 'number' || !Number.isFinite(n)) {
      return false;
    }

    if (n < smallestNum) {
      smallestNum = n;
    }
  }

  return smallestNum;
}