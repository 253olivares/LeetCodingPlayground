export const practice1 = (nums1:number[],m:number,nums2:number[],n:number):void => {

    // n is always the ammount of values we are importing

    // while (n!==0){
    //     nums1[(nums1.length-1)-(nums2.length-n)] = nums2[n-1];

    //     n--
    // }

    // if(n===0) return;

    // let i = (m+n)-1; //length of nums1
    // let j = 0; // length o nums2

    // for(j; j<n;j++){
    //     nums1[i-j] = nums2[j];
    // }


    // // // this is allowed since it mutates our original array
    // nums1.sort((a,b)=>a-b);

    // best method

    // nums1.splice(m,n,...nums2);
    // nums1.sort((a,b)=> a-b);

    // 2 Integer Arrays

    // Num1
    // num2
    // Both in non-decreasing order

    // To integers m and n representing the number of elements in nums1 and num2 respectively

    // Merge nums1 and nums2 into a single array and sort non decreasing order

    // Finally array can not be returned from a function but mutated in original array

    // nums 1 is the total final length of m+n where the first m elements denote the elements that should be merged

    // The Last n elements are set to 0

    let fillNumbers = m+n -1 // this is going to be the positions of our array
    let j = 0; // this is for our 4 loop

    while (j < n){
        nums1[fillNumbers - j] = nums2[j];
        j++;
    }

    nums1.sort((a,b)=> a-b);
}