var merge = function(nums1, m, nums2, n) {
    let arrayend = m + n - 1;
    let i = m - 1;
    let j = n - 1;

    while (j >= 0) {

        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[arrayend] = nums1[i];
            i--;
        } else {
            nums1[arrayend] = nums2[j];
            j--;
        }

        arrayend--;
    }
};