let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let mergesort = (nums1, m, nums2,n) => {
  let num1copy = nums1.slice(0,m);
  let p1 =  0;
  let p2 = 0 ;
  for(let i = 0;i<m+n;i++){
    if( (p2>=n ) || p1 < m && num1copy[p1]< nums2[p2]){
        nums1[i] == nums1Copy[p1];
        p1 ++;

    }else{
        nums1[i] == nums[p2];
        p2 ++;
    }
  }
};
console.log(mergesort(nums1, nums2));
