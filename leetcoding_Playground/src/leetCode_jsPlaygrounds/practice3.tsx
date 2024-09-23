export const practice3 = (array1:string[], array2:string[]):boolean => {
    // Notes

    // goal is to check the two arrays of the substring to make sure they match
    // we want to check each index to make sure their position is the same

    // we want a while loop to continuously run checks 
    // indexOfArray1 = 0
    // indexOfArray2 = 0
    // indexOfSubstring1 = 0
    // indexOfSubstring2 = 0

    let indexOfArray1 = 0;
    let indexOfArray2 = 0;
    let indexOfSubstring1 = 0;
    let indexOfSubstring2 = 0;
    
    // WhileLoop that checks to make sure our check is finished
    // condition check if index of bother arrays are the same length of each and that we have reached the end
    while (indexOfArray1 !== array1.length && indexOfArray2 !== array2.length) {
        // this code will run until we complete our loop we may break out if we run into a miss match which at that point we return false
        
        // we want to check if our values match if they dont then we break the code no point in continuing 
        // return false;

        if(array1[indexOfArray1][indexOfSubstring1] === undefined && array2[indexOfArray2][indexOfSubstring2] === undefined ) return true

        if(array1[indexOfArray1][indexOfSubstring1] !== array2[indexOfArray2][indexOfSubstring2]) return false


        // if they are the same continue the code

        // we want to check if indexOfSubstring of either array == indexOfArray length

        // if indexOfSubstring1 === indexOfArray1.length - 1 // then increase or index of array1
            // else we want to increase our substring indexOfSubstring1
        // if indexOfSubstring2 === indexOfArray2.length - 1 // then increase or index of array2
            // else we want to increase our substring indexOfSubstring2

        // if we complete our loops we want to return true meaning both arrays are the same otherwise we want to return false

        if(indexOfSubstring1 === array1[indexOfArray1].length-1) {
            indexOfArray1 ++; // go onto next value
            indexOfSubstring1 = 0; // reset
        } else {
            indexOfSubstring1++;
        }

        if(indexOfSubstring2 === array2[indexOfArray2].length-1){
            indexOfArray2 ++; // go onto next value
            indexOfSubstring2 = 0; // reset
        } else {
            indexOfSubstring2++;
        }   
    }

    return true
}