const greatestCommonDenominator = (str1: string, str2:string) => {
    
    // We want to find the greatest common denominator between two strings

    // These strings much equal each other meaning string1 + string2 has to return string2 + string1

    // These we need need to take these two numbers and find the greatest common denominator

    // Best way to do this is by using Euclidean algorithm
    // this means that the greater common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number.

    // after we find our denominator we want to use it to break our string into a substring what contains the greatest common denominator
    
    // First we want to check if the strings repeat each other
    // Otherwise if not return 0 as there will be no common denominator.

    if(str1 + str2 === str2 + str1) {
        return "";
    }

    // the greatest common denominator 
    // we make sure a is our largest string
    // be is our smaller string at the start
    const gcd = (a: number,b : number) => {
        // under rules of Euclidean algorithm we want to keep running
        // our code until we get a remainder of 0 and when we do our 
        // previous remainder we save in a will be the greatest common divisor
        while (b !==0) {
            // saving our previous number of division
            // at start it will be the smaller number between the two values

            const temp = b;
            // return the remainder of dividing a by b
            // any amount of value not used when dividing
            b = a % b;

            // then we want to set our a to our temp number which was our previous divisor
            a = temp;
        }

        return a
    }

    return str1.substring(0,gcd(str1.length,str2.length))

}