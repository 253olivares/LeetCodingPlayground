public class TwoSumFast {
    public int[] twoSum(int[] nums, int target) {

        for (int i = 0; i < nums.length; i++) {
            for (int j = 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] { i, j };
                }
            }
        }

        return nums;

        /*
         * 
         * {5,2,4}
         * 6
         * 
         * Better Solution
         * HashMap
         * K -> V
         * 
         * loop through the array once and map the numbers needed to reach our target
         * number
         * 
         */
    }
}
