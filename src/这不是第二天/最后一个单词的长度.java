package 这不是第二天;

public class 最后一个单词的长度 {
    public int theLastLend(String s) {
        int index = s.length() - 1;
        //c从最后一个开始数起是因为有可能最后一位是空字符
        while (index>0&&s.charAt(index)==' ')
        {
            index--;
            //这样一来最终index是从后往前数的最后第一个不为空字符的下标
        }
        int star=0;
        while (index>0&&s.charAt(index)!=' ')
        {
            star++;
            //这样一来最终star是最后一个单词的长度
            index--;
        }
        return star;
    }
}
