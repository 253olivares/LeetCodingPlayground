public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int maxLengthFound = 0;
        int stringSize = s.length();
        String largestString;

        // this first loop starts at the first character of the string
        for (int i = 0; i < stringSize; i++) {
            // this loop is our ending bracket of the string we will create that we are
            // going to check

            // variable to build our substring
            StringBuilder subString = new StringBuilder();

            for (int j = 0; j < stringSize; j++) {
                // check value
                String checkValue = String.valueOf(s.charAt(j));
                // checks to see if your value returns our value
                // if it does break from our loop
                if (subString.indexOf(checkValue) != -1) {
                    // this will only play if our value is not -1
                    // it should return -1 since indexOf should return the index of the value if it
                    // exists
                    break;
                }
                // if not add it to our substring
                subString.append(checkValue);
                // return which ever value is currently larger
                maxLengthFound = Math.max(maxLengthFound, subString.length());
            }
            if (subString.length() > maxLengthFound) {
                largestString = subString.toString();
            }
        }

        return maxLengthFound;
    }
}
