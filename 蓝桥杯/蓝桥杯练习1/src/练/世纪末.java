package 练;

import java.util.Calendar;

/**
 * 题目：
 * 1999年的12月31日是星期五，请问：未来哪一个离我们最近的一个世纪末年（即xx99年）12月31日正好是星期天（即星期日）？
 */
public class 世纪末 {
    public static void main(String[] args) {
        Calendar instance = Calendar.getInstance();
        for (int year = 1999; year < 10000; year+=100) {
            instance.set(Calendar.YEAR,year);
            instance.set(Calendar.MONTH,11);
            instance.set(Calendar.DATE,31);
            if (instance.get(Calendar.DAY_OF_WEEK)==1){
                System.out.println(year);
                break;
            }
        }
        return;
    }
}
