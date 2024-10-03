function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // Kids with the greatest number of candies

    // There are n kids with candies, You are given an integer array candies, 
    // where each candies[index] represents the number of candies the ith kid has, 
    // and an integer extraCandies, denoting the number of extra candies that you have.
    
    // return a boolean array rest of length n where result[i] is true if, after giving the index kid all the extra candies, they will have the greatest number of cnadies among all the kids or false otherwise.

    // Note: Multiple kids can have greatest number of candies. 

    // Constraints:
    // n == candies.length
    // 2 <= n <= 100
    // 1 <= candies[i] <= 100
    // 1 <= extraCandies <= 50

    // Pesudo code:

    // we need to loop through each entry
        // During the loop we add extra candies to the index
        // then we check to see if it is the max in the array.

        // the added value is greater than or equal to the current max then we return true
        // otherwise we return false
    
    // return our new array

    const newArray : boolean[] = candies.map((kidWithCandies : number, _) : boolean =>{
        // we add the current candy with extra candies and then run  a compare to check if it is equal to or greater than
        // our current max in array by spreading our array into math.max
        return kidWithCandies + extraCandies >= Math.max(...candies);
    })

    return newArray;
};  