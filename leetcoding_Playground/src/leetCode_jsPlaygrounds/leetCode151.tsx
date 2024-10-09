export function reverseWords (s:string):string{

    // Problem - given a input string s, reverse the order of the words
    // A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. 

    // Return a string of the words in reverse order concatenated by a single space

    //Note that s may contain leading or trailing space or multiple spaces between two words. The returned string should only have a single space separating the words. Do no include any extra space. 

    // Pseudo code: 

    // we want to pass a string into our function and return a new string that reverses order of our words in our string.

    // spaces will be trimmed to remove any spaces at the start and end. 

    // trailing space will then be replaces by only one space. 

    // Then we will split our string into an array and reverse our array
    
    // then we will concat our array again and return the new string in reverse. 

    // trim cuts our spaces at the end
    // replace will cut our spaces in our text and replace them with a singular space
    //   - additional note: \s is a meta character for white space coupled with  + we are
    //     asking it to replace our white space and following white spaces (+) with a singular white space
    // split turns our string into an array but cutting each index at the space
    // reverse changes the order of our content in the array in revers
    // join combines our array back into a string by replaces every , with a white space

    return s.trim().split(/\s+/).reverse().join(" ");
}