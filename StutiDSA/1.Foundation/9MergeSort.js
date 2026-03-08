var sortArray = function (nums) {
  return mergeSort(nums);
};

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid, array.length));

  return merge(left, right);
}
function merge(left,right) {
    let res=[];
    i=0;
    j=0;
    while(i< left.length && j< right.length){
        if(left[i] < right[j]){
            res.push(left[i]);
            i++;
        }
        else{
            res.push(right[j]);
            j++;
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)];

}



console.log(mergeSort([8, 3, 5, 4, 6]));
