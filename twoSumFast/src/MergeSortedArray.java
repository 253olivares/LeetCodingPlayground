import java.util.Arrays;

public class MergeSortedArray {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int fillNumber = m + n - 1;
        int loop = 0;

        while (loop < n) {
            nums1[fillNumber - loop] = nums2[loop];
            loop += 1;
        }

        Arrays.sort(nums1);
    }
}