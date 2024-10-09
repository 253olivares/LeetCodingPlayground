export function productExceptSelf (nums:number[]): number[] {
    
    // Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of numbs excepts nums[i].


    // The product of an prefix or suffix of nums is guaranteed to fit a 32 bit integer. 

    // You mus write an algorithm that runs in 0(m) time and without using division operation

    //example 1:
    //input [1,2,3,4]
    //Output [24,12,8,6]

    //example 2:
    // input [-1,1,0,-3,3]
    // [0,0,9,0,0]

    //Constraints
    // 2<=nums.length<=10^5
    // -30 <= nums[i] <= 30
    // The product of any prefix or suffix of nums is guaranteed to fix in a 32 bit integer

    // pseudo code 
    // we need to loop through each number and when we do we want to multiply each value in the array with the next while skipping current number we are on
    // after we multiple all the values skipping the current value at the current index we want to return the value in a new array in the same index
    // of the value we were skipping at the time

    const n = nums.length;
    const answer = new Array(n).fill(1);

    let product = 1;
    for(let i=0; i<n; i++ ) {
        answer[i] *= product;
        product *= nums[i];
    }

    product = 1;
    for(let i=n-1; i>=0; i-- ) {
        answer[i] *= product;
        product *= nums[i];
    }

    return answer;
}