package 这不是第二天;

public class 最大子序和 {
    /* 题目要求：
    给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
  例如：
    输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
    输出：6
    解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
     */
    public int MaxAdd(int []nums)
    {
        int p=0;
        int max=nums[0];  //单纯只是为了让max为全局变量而已，赋值nums[0]并没有什么特殊的意思，不要多虑
        for (int i = 0; i < nums.length; i++) {
             p = p + nums[i];   //把所遍历的数加起来再跟当前的数比较，哪个大选哪个就得出本题答案了
            max = Math.max(p, nums[i]);
        }
        return max;
    }

    //方法二：
    public int MaxAdd2(int []nums)
    {
        for (int i = 1; i < nums.length; i++) {
            if (nums[i-1]>0)
            {
                nums[i]=nums[i-1]+nums[i];
            }
        }
        int max = nums[0];
        for (int i = 1; i < nums.length; i++) {
            max = Math.max(nums[i], max);
        }
        return max;
    }

    //ps:还有个分治法我不理解那个调归
    /*
    class Solution {
    public class Status {
        public int lSum, rSum, mSum, iSum;

        public Status(int lSum, int rSum, int mSum, int iSum) {
            this.lSum = lSum;
            this.rSum = rSum;
            this.mSum = mSum;
            this.iSum = iSum;
        }
    }

    public int maxSubArray(int[] nums) {
        return getInfo(nums, 0, nums.length - 1).mSum;
    }

    public Status getInfo(int[] a, int l, int r) {
        if (l == r) {
            return new Status(a[l], a[l], a[l], a[l]);
        }
        int m = (l + r) >> 1;
        Status lSub = getInfo(a, l, m);     //这里我不理解...难道这里不是死循环了吗？？永远也到不了下面那个pushup方法了
        Status rSub = getInfo(a, m + 1, r);
        return pushUp(lSub, rSub);
    }

    public Status pushUp(Status l, Status r) {
        int iSum = l.iSum + r.iSum;
        int lSum = Math.max(l.lSum, l.iSum + r.lSum);
        int rSum = Math.max(r.rSum, r.iSum + l.rSum);
        int mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
        return new Status(lSum, rSum, mSum, iSum);
    }
}
     */

}
