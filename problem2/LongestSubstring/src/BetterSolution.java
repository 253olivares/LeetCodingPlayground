import java.util.HashMap;

public class BetterSolution {
    public int lengthOfLongestSubstring(String s) {

        int maxLengthFound = 0;
        int stringSize = s.length();

        // we can make this code faster by making a hashmapa and creating a index of
        // when we last say this characters
        HashMap<Character, Integer> charLookUp = new HashMap<>();

        // this first loop starts at the first character of the string
        for (int right = 0, left = 0; right < stringSize; right++) {
            char charToLookUp = s.charAt(right);
            // we are checking to see if the character we look at exists in our hashmap
            // if it does we want to check if the value is equal to or greater then our left
            if (charLookUp.containsKey(charToLookUp) && charLookUp.get(charToLookUp) >= left) {
                // if it is greater than set our left to the visited character
                left = charLookUp.get(charToLookUp) + 1;
            }
            // after we move our left set our max length
            maxLengthFound = Math.max(maxLengthFound, right - left + 1);
            // set our character depending oun where we found it
            charLookUp.put(charToLookUp, right);
        }

        return maxLengthFound;
    }
}
