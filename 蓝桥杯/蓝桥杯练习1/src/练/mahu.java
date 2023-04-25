package 练;

/**
 题目：
 假设 a b c d e 代表1~9不同数字（注意是各不相同的数字，且不含0?
 能满足形如： ab * cde = adb * ce 这样的算式一共有多少种呢?

 //todo 知识点：枚举、递归
 */
public class mahu {
    public static void main(String[] args) {
        int n=0;
        for (int a = 1; a < 10; a++) {
            for (int b = 1; b < 10; b++) {
                if (a!=b){
                    for (int c = 1; c < 10; c++) {
                        if (c!=a&&c!=b){
                            for (int d = 1; d < 10; d++) {
                                if (d!=a&&d!=b&&d!=c){
                                    for (int e = 1; e < 10; e++) {
                                        if (e!=a&&e!=b&&e!=c&&e!=d){
                                            if ((a*10+b)*(c*100+d*10+e)==(a*100+d*10+b)*(c*10+e)){
                                                n++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        System.out.println(n);
    }
}
