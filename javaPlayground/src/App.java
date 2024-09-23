import java.util.Arrays;

public class App {
    public static void main(String[] args) throws Exception {

        int[] nums1 = { -1, 2, -3, 0, 0, 0 };
        int m = 3;
        int[] nums2 = { 2, 5, 6 };
        int n = 3;

        new App().merge(nums1, m, nums2, n);

    }

    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if (n == 0)
            return;

        // length of my nums array
        // total number for unique values in m + the total number of values being merged

        // for loop
        // for (int j = 0; j < n; j++) {
        // nums1[((m + n) - 1) - j] = nums2[j];
        // }
        // better solution

        for (int j = 0, i = m; j < n; j++) {
            nums1[i] = nums2[j];
            i++;
        }

        // call in built in sort method from array
        Arrays.sort(nums1);

        System.out.println(Arrays.toString(nums1));

    }
}
