package 第一天;

public class 删除数组中重复项 {
    /* 题目要求：
    给你一个有序数组 nums ，请你删除重复出现的元素，使每个元素只出现一次 ，返回删除后数组的新长度。
     */
    public int delectSame(int []arr)
    {
        //本题采用双指针，指针fast作为扫描数据，slow作为添加数据
        int fast=1,slow=1;
        if (arr.length==0)
        {
            return 0;
        }
        while (fast<arr.length)
        {
            if (arr[fast]!=arr[fast-1])
            {
                arr[slow]=arr[fast];
                slow++;
            }
            fast++;
        }
        return slow;
    }
}
