package 第一天.最长公共前缀;

public class 横向扫描 {
    public String theMain(String []s)
    {
        if (s==null||s.length==0)
        {
            return null;
        }
        String twoLongest = null;
        for (int i = 0; i < s.length-1; i++) {
            twoLongest = findTwoLongest(s[i], s[i + 1]);
            s[i+1]=twoLongest;
        }
        return twoLongest;
    }

    //定义一个查找两个字符串的最长公共前缀
    public String findTwoLongest(String s1,String s2)
    {
        int min = Math.min(s1.length(), s2.length());
        int dex=0;
        while (dex<min&&s1.charAt(dex)==s2.charAt(dex))
        {
            dex++;
        }
        return s1.substring(0,dex);
    }

}
