package 第一天.最长公共前缀;

public class 纵向扫描 {
    public String secondMethod(String []s)
    {
        //数组长度为行数
        int row = s.length;
        int list = s[0].length();

        if (s.length==0||s==null)
        {
            return "";
        }
        for (int i = 0; i < list; i++) {
            char firstchar=s[0].charAt(i);
            for (int j = 0; j < row; j++) {
                if (s[j].length()==i||s[j].charAt(i)!=firstchar)
                {
                    return s[0].substring(0,i);  //substring(0,i):包括0，不包括i
                }
            }
        }
        return s[0];
    }
}
