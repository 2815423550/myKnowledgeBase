package 主;

import java.util.Calendar;

/**
 题目：
 1999年的12月31日是星期五，请问：未来哪一个离我们最近的一个世纪末年（即xx99年）12月31日正好是星期天（即星期日）？

 //todo 知识点：Calendar API的使用
 */
public class 世纪末的星期 {

    public static void main(String[] args) {
        //创建一个Calendar实例
        Calendar calendar = Calendar.getInstance();
        //循环，找到想要的答案    year+=100是因为题目要求
        for (int year = 1999; year < 10000; year+=100) {
            //设置年份
            calendar.set(Calendar.YEAR,year);
            // 设置月份，按照题目要求设置为12月。注意这里的一月是0，所以12月用11表示
            calendar.set(Calendar.MONTH,11);
            // 设置日期，按照题目要求设置为31号
            calendar.set(Calendar.DATE,31);
            // 判断，如果那天为星期日则输出。注意这里的1表示星期日，星期一用2表示
            if (calendar.get(Calendar.DAY_OF_WEEK)==1){
                System.out.println(year);
                break;
            }
        }
    }
}
