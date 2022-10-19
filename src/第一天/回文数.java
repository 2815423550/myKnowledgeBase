package 第一天;

import java.util.Scanner;

public class 回文数 {
    /*
    给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

    回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
     */

    /*方法一：把整数反转之后跟原整数比较看看是否相等，但是这里有一个局限那就是反转后的数可能会大于int的最大值，
    故而会造成程序异常。
     */
    public boolean first()
    {
       //跟“整数反转”做法一样，这里就省略了
        return true;
    }

    //方法二：只判断整数的一半反转后是否等于另一半就可以了
    public boolean second(int x)
    {
        if (x<0||x%10==0&&x!=0)
        //因为负数与它反转后的数不可能相等,还有以0结尾的数反转后也不可能与原数相等,要注意0也是回文数
        {
            return false;
        }
        int revertednumber=0;
        while (x>revertednumber)    //x>revertednumber：判断一半的方法
        {
            revertednumber=revertednumber*10+x%10;
            x/=10;
        }
        return x==revertednumber||x==revertednumber%10;
        //这里要分奇数位和偶数位整数，如果是偶数位则直接比较，奇数位则去掉最后一位数再比较
    }
    //总结：时间复杂度：O(log10(n));     空间复杂度：O(1)，因为我们只需要开辟一个整形空间来对反转后的数字进行储存
}
