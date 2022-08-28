package 第一天;

import java.util.HashMap;
import java.util.Map;

public class 罗马数字转整数 {
    public static void main(String[] args) {
       Map<Character,Integer> hm=new HashMap<Character,Integer>();
       /*注意这里是Map接口，不要写成HashMap，至于有什么区别我不知道我只知道会出错
       如果是HashMap的话那个get方法只能获取obj？？我不太明白
        */
        hm.put('I',1);
        hm.put('V',5);
        hm.put('X',10);
        hm.put('L',50);
        hm.put('C',100);
        hm.put('D',500);
        hm.put('M',1000);
    }

    public int test(String s,HashMap<Character,Integer>hm)
    {
        int toale=0;
        for (int i = 0; i < s.length(); i++) {
            Integer integer = hm.get(s.charAt(i));  //charAt(i):获得字符串的第i个字符
            //hu.get(key):根据键找值
            toale+=integer;
        }
        return toale;
    }
}
