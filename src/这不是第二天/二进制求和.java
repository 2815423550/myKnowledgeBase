package 这不是第二天;

public class 二进制求和 {
    public int addT(String a,String b)
    {
        int index1=a.length()-1;
        int index2=b.length()-1;
        int carry=0;
        StringBuilder sb=new StringBuilder();

        while (index1>=0&&index2>=0)
        {
            int sum = carry;
            //a.charAt(index1--) - '0':这个是字符转成整数的方法
            sum += a.charAt(index1--) - '0';
            sum += b.charAt(index2--) - '0';
            carry = sum / 2;
            sb.append(sum % 2);
        }

        //内啥这道题我根本就无法理解，不管了，只知道字符怎么转成整数就行了
        return 0;
    }
}
