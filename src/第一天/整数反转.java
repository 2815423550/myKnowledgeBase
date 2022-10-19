package 第一天;

import java.util.Scanner;

public class 整数反转 {
    /*
        别想了，运行不了，这里的题目都只是在告诉你方法和思维，不要老想着执行程序..
     */
    public static void main(String[] args) {
        /* 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

        如果反转后整数超过 32 位的有符号整数的范围[−2^31,  2^31 − 1] ，就返回 0。
        其中：2^31-1=2147483647,-2^31=-2147483648
         */
        resver();
    }
    public static int resver()
    {
        System.out.println("请输入整数：");
        Scanner sc=new Scanner(System.in);
        int i = sc.nextInt();
        int x=0;
        while (i!=0)
        {
            if (i<-2147483648||i>2147483647)
            {
                return 0;
            }
            else
            {
                /*反转整数代码：
                下面这两句代码便是使得整数反转的代码，
                奇妙吧，但是这是数学方面的奇妙
                 */
                x = x*10 + i%10;
                i = i/10;
            }
        }
        return x;
    }

}
