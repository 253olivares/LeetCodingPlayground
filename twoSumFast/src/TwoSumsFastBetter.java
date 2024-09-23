import java.util.HashMap;

public class TwoSumsFastBetter {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> solutions = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
            int solution = Math.abs(target - nums[i]);
            if (!solutions.containsKey(nums[i])) {
                solutions.put(solution, i);
            } else {
                // we're only returning index positions
                return new int[] { solutions.get(nums[i]), i };
            }
        }

        return nums;
    }
}
