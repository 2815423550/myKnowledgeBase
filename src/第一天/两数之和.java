package 第一天;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class 两数之和 {
    /*
       给定一个整数数组 nums和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。你可以按任意顺序返回答案。
例如： 输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
        */
    public static void main(String[] args) {
        int []ddd=first();
        System.out.println(Arrays.toString(ddd));   //为啥只会输出0，1？？？
        second();
    }

    public static int[] first()
    {
        int []brr={2,7,11,15,2,4,5};
        int target=9;
        //解法一：
        for (int i = 0; i < brr.length-1; i++) {    //要理解这里的i < brr.length-1，因为第一个元素一定不是数组中的最后一个数
            for (int j = i+1; j < brr.length; j++) {    //要理解这里的的j = i+1，因为j从第二个数开始
                if (brr[i]+brr[j]==target)
                {
                    return new int[]{i,j};
                }
            }
        }
        return new int[]{-1,-1};    //如果没有就返回-1
        /*总结：时间复杂度——O(n^2)，这里的n为数字的长度空间
               复杂度——O(1)，只用到常数个临时变量，也就是只用到了两个临时变量i，j
         */
    }

    public static int[] second()
    {
        int []brr={2,7,11,15,2,4,5};
        int target=9;
        //解法二：
        Map <Integer,Integer> map=new HashMap<Integer,Integer>(brr.length-1);
        //这里一般建议初始化哈希表的容量以免哈希表扩容带来的性能消耗大问题，这里是brr.length-1那是因为
        //当遍历到最后一个数都不是想要的数的时候就没必要把这个数添加到表中了

        map.put(brr[0],0);  //因为第一个数肯定不在表中，所以直接把第一个数添加到表中
        for (int i = 1; i < brr.length; i++) {
            if (map.containsKey(target-brr[i]))
            {
                return new int[]{map.get(target-brr[i]),i};
                //因为get方法只能通过键查找值，所以这个解法里把brr[i]作为键
            }
            map.put(brr[i],i);  //要理解这里为什么把brr[i]作为键，而i作为值
        }
        return new int[]{-1,-1};    //如果没有就返回-1
        /*总结：时间复杂度为：O(n),n为数组长度；
        空间复杂度为：O(n)，因为这个解法的容量和数组长度线性相关，内啥我也不懂...........
         */
    }




}
