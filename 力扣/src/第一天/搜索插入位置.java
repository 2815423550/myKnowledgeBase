package 第一天;

import java.util.Arrays;

public class 搜索插入位置 {
    /*  题目要求：
    给定一个数组和一个目标值，在数组中找到目标值，并返回其索引，必须使用时间复杂度为 O(log n) 的算法
     */
    public int findSet(int []nums,int target)
    {
        //因为本题要求时间复杂度为 O(log n)，所以采用二分法
        Arrays.sort(nums);  //将数组从小到大排序
        int left=0,right=nums.length-1;
        int mid=(left+right)/2;
        while (left<=right)
        {
            if (nums[mid]==target)
            {
                return mid;
            }
            else if (nums[mid]>target)
            {
                right=mid-1;
            }
            else left=mid+1;
        }
        return -1;  //表示没找到
    }
}
