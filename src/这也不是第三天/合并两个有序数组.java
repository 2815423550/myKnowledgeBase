package 这也不是第三天;

import java.util.Arrays;

public class 合并两个有序数组 {
    //最直观的方法是先将数组brr放到arr的后面，然后对arr进行排序
    //此方法的缺点：方法一没有利用数组已经被排序的性质
    public int[] addTwoCur(int[] arr, int[] brr) {
        if (arr.length == 0 && brr.length == 0) {
            return null;
        } else if (arr.length == 0) {
            return brr;
        } else if (brr.length == 0) {
            return arr;
        }

        for (int i = 0; i < brr.length; i++) {
            arr[arr.length + i] = brr[i];
        }
        Arrays.sort(arr);
        return arr;
    }

    //方法二：双指针
    /*
    方法一没有利用数组已经被排序的性质，我们可以使用双指针方法。
    这一方法将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中
     */
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        m = nums1.length;
        n = nums2.length;
        int p1 = 0, p2 = 0;
        int[] sorted = new int[m + n];
        int cur;
        while (p1 < m || p2 < n) {
            if (p1 == m) {
                cur = nums2[p2++];
            } else if (p2 == n) {
                cur = nums1[p1++];
            } else if (nums1[p1] < nums2[p2]) {
                cur = nums1[p1++];
            } else {
                cur = nums2[p2++];
            }
            sorted[p1 + p2 - 1] = cur;
        }
        for (int i = 0; i != m + n; ++i) {
            nums1[i] = sorted[i];
        }
    }

    //方法三：逆向双指针
    /* 使用逆向双指针的前提条件是：
            给定两个数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。
     */
    public void mere(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1, p2 = n - 1;
        int tail = m + n - 1;
        int cur;
        while (p1 >= 0 || p2 >= 0) {
            if (p1 == -1) {
                cur = nums2[p2--];
            } else if (p2 == -1) {
                cur = nums1[p1--];
            } else if (nums1[p1] > nums2[p2]) {
                cur = nums1[p1--];
            } else {
                cur = nums2[p2--];
            }
            nums1[tail--] = cur;
        }
    }

    //这个也是逆向双指针方法
    public void merGe(int[] nums1, int m, int[] nums2, int n) {
        int len1 = m - 1;
        int len2 = n - 1;
        int len = m + n - 1;
        while(len1 >= 0 && len2 >= 0) {
            // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
            nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
        }
        // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
        System.arraycopy(nums2, 0, nums1, 0, len2 + 1);
        /*  关于System.arraycopy：
        例如：
            数组1：int[] arr = { 1, 2, 3, 4, 5 };
            数组2：int[] arr2 = { 5, 6,7, 8, 9 };
            运行：System.arraycopy(arr, 1, arr2, 0, 3);
            得到： int[] arr2 = { 2, 3, 4, 8, 9 };
         */
    }

}
