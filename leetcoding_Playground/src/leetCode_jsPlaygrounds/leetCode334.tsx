export function increasingTriplet(nums: number[]): boolean {
    
    // problem
    // Given an integer array nums, 
    // return true if there exists a triple of indices (i,j,k) 
    // such that i<j<k and nums[1] < nums[j], nums[k] if no such indices exist return false

    // constraints
    // i <= nums.length <= 5 *10^5
    // -2^31 <= nums[i] <= 2^31 - 1

    // Pesudo code:
    // We want to loop through each number

    // if it is the least we want to throw it into our stack

    // then when we check the next number we want to see if it is greater than the previous number
    // if it is then we want to add it to the stack
    

    // Then we will continue to check subsequent numbers if we find another number that is greater 
    // than our latest number than we add it to the stack.

    // If we reach the end of our list and no stack was completed we will restart the stack with the next smallest number
    // We will continue until we reach the of the stack. 
    

    // if we reach the end of the stack and no matches are found we will terminate the code and return a false.


    // console.log(nums.length-2);

    // console.log(nums[nums.length-2]);

    // throw out false if array is less than 3
    // if(nums.length < 3) return false;

    // let solution:number[] = [];

    // let left = 0
    // let right = left+1;
    // // Loop will break when we find a solution or when we hit
    // // the end of our array which ever comes first
    
    // // when we mean end of array we are talking about second to last place because 
    // // we can complete a set of 3 anymore with only 2 indexes

    // // ex: [_,_,_,_, end here, _]
    // while (solution.length !== 3 && left < nums.length-2) {
    //     if(solution.length === 0) {
    //         // if our solution is empty push index left
    //        solution.push(left)
    //     }

    //     console.log(nums[solution[solution.length-1]]);
    //     console.log(nums[right]);

    //     console.log(nums[solution[solution.length-1]] < nums[right])

    //     // if our number on right is greater than our last greatest number
    //     // then add it to the array and it will be the new greatest.
    //     if(nums[solution[solution.length-1]] < nums[right]) {
    //         solution.push(right);
    //     }

    //     right ++;

    //     // if we reach the end with no match reset the array
    //     // and start with the next number and begin checking from there
    //     console.log(solution);
    //     if(right === nums.length && solution.length !== 3) {
    //         // solution = [];
    //         // left ++;
    //         // right = left+1;

    //         if(solution[1] && solution[1] < nums.length -2) {
    //             right = solution[1]+1;
    //             solution = [left];
    //         } else {
    //             solution = [];
    //             left ++;
    //             right = left+1;
    //         }

    //     }
    // }
    // console.log(solution)

    // if(solution.length === 3) {
    //     return true
    // } else {
    //     return false
    // }

    if(nums.length < 3) return false;

    let firstMin: number = Infinity;
    let secondMin: number = Infinity;

    // Loop through once
    for (let num of nums) {
        // if our current number is less than our first num then set it otherwise
        if (num <= firstMin) {
            firstMin = num;
        }
        // if our number is less than the second min set it
        else if (num <= secondMin) {
            secondMin = num;
        }
        // Otherwise if our next number is not less than the first min or the second min
        // Then we found our triplet
        else {
            return true;
        }
    }

    // of we never found our triplet then we return false.
    return false;
};