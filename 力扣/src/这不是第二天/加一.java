package 这不是第二天;

public class 加一 {
    public int[] pushAddOne(int[] nums) {
        for (int i = nums.length - 1; i >= 0; i--) {
            nums[i]++;
            nums[i]=nums[i]%10;
            if (nums[i] != 0) {  //如果那个数不是9就结束，是9的话继续循环
                return nums;
            }
        }
        //如果程序能到这里的话说明是999这类全是9的情况，最终得到的数组长度会+1
        //而且第一位数是1
        nums=new int[nums.length+1];
        nums[0]=1;
        return nums;
    }
}
