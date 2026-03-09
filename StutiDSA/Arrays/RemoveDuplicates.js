var removeDuplicates = function (array) {
  if (array.length === 0) return false;
  let i = 0;
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i]=array[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4]));
let arr = [1, 1, 2, 2, 3, 4, 4];
let k = removeDuplicates(arr);
console.log(arr.slice(0,k));
