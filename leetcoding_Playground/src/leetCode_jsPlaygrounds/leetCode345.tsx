export const  reverseVowels =(s:string):string => {
    
    // Give a string s, reverse only all the values in the string and return it.

    // The vowels are 'a', 'c', 'i','o' and 'u' and they can appear in both lower 
    // and upper cases more than once. 

//      Example 1:

//          Input: s = "IceCreAm"

//          Output: "AceCreIm"

//      Explanation:

//          The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

//      Example 2:

//          Input: s = "leetcode"

//          Output: "leotcede"

//      Constraints:

//          1<=s.length<=3*10^5
//          s consists of printable ASC11 characters

// Goal: We want to scan our string for vowels and if it is found we need to 
// swap the vowels wit th next proceeding vowel on the next end

// Vowels that need to be checked [a,e,i,o,u]

    let left = 0;
    let right = s.length-1;
    let array = s.split("");

    let vowels = ["a","e","i","o","u","A","E","I","O","U"];

    while(left<right) {

        let leftSelect = array[left];
        let rightSelect = array[right];
        let isLeftIncluded = vowels.includes(leftSelect);
        let isRIghtIncluded = vowels.includes(rightSelect);

        if(isLeftIncluded && isRIghtIncluded) {
            array[left] = rightSelect;
            array[right] = leftSelect;
            left ++;
            right --;
         } 

        !isLeftIncluded && left ++;
        !isRIghtIncluded && right --;

    }
    
    return array.join("");
}