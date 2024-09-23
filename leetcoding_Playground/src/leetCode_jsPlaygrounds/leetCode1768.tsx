export const practice1768 = (word1: string, word2: string):string => {

    // Merge Strings Alternately

    // We are given 2 strings

    // We have to merger these strings and add the letters from each in alternating order.

    // we start with word1 and if a string is longer than the other then we append the 
    // additional letters onto the end of the merged string

    // create a loop based on the length of the larger array and double

    // each time we loop we want to append to our string from array 1 or 2 depending on if our loop is even or odd

    // if value doesn't exist continue to next value

    let text = '';

    for (let i = 0; i<Math.max(word1.length,word2.length);i++) {
        text += (word1[i]||'') + (word2[i] || '')
    }

    return text;
}