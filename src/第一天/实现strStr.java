package 第一天;

public class 实现strStr {
    /* 题目要求：
    给你两个字符串haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的
    第一个位置（下标从 0 开始）。如果不存在，则返回 -1 。
     */
    public int demo(String s1,String s2)
    {
        if (s1.length()<s2.length())
        {
            return -1;
        }
        //i < s1.length()-s2.length():通过推算得出规律
        for (int i = 0; i < s1.length()-s2.length(); i++) {
            //j < s2.length():因为最长也只是s2.length()
            int j=0;    //把j定义在外面为了下面也能调用
            for (; j < s2.length(); j++) {
                if (s1.charAt(i+j)!=s2.charAt(j))
                //s1.charAt(i+j)!=s2.charAt(j):这里我要怎么理解呢??验证了，但是是怎么想到这个的？？
                {
                    break;
                }
            }
            if (j==s2.length())
            {
                return j;
            }
        }
        //如果都不符合，则返回-1
        return -1;
    }
}
