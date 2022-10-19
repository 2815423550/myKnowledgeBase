package 第一天;

import java.util.Deque;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class 有效的括号 {
    public static boolean isCanUse(String s)
    {
        //创建hashMap，右括号为键，左括号为值，因为本题就是这样解
        Map <Character,Character> map=new HashMap<Character,Character>();
        map.put('}','{');
        map.put(']','[');
        map.put(')','(');

        //创建链表LinkedList对象
        Deque <Character> stack=new LinkedList<Character>();
        /*
        LinkedList提供了丰富的方法，可以模拟链式队列，链式堆栈等数据结构，
        而本题恰好是用栈的结构解题
         */

        //如果字符长度为奇数直接不符合本题要求
        if (s.length()%2==1)
        {
            return false;
        }
        /*  思路：
        如果 c 是左括号，则c入栈 push(c)； 否则通过哈希表判断括号对应关系，
        若 stack 栈顶出栈括号 stack.pop() 与当前遍历括号 c 不对应，则提前返回 false
         */
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (map.containsKey(c)) //如果是右括号则符合
            {
                if (stack.isEmpty()||stack.peek()!=map.get(c))  //stack.peek(): 获取第一个元素
                {
                    return false;
                }
                stack.pop();    //移除链表中第一个元素
            }
            else stack.push(c); //在链表头部插入一个元素
        }
        return stack.isEmpty(); //isEmpty():如果没有元素返回true，有元素返回false
    }
}
