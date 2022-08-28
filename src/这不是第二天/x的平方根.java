package 这不是第二天;

public class x的平方根 {
    //方法一：前人栽树，后人乘凉
    public int mySqrt(int x) {
        if (x == 0) {
            return 0;
        }
        int ans = (int) Math.exp(0.5 * Math.log(x));
        /*
        (int) Math.exp(0.5 * Math.log(x))：这个是求某数的平方根的方法
        同理，如果是三次方根就把0.5改成1/3
         */
        //指数函数和对数函数的参数和返回值均为浮点数，用此方法会有误差，所以要用以下方法检查
        return (long) (ans + 1) * (ans + 1) <= x ? ans + 1 : ans;
    }

    //方法二：二分查找法
    public int mysqrt(int x) {
        // 特殊值判断
        if (x == 0) {
            return 0;
        }
        if (x == 1) {
            return 1;
        }

        int left = 1;
        int right = x / 2;
        // 在区间 [left..right] 查找目标元素
        while (left < right) {
            int mid = left + (right - left + 1) / 2;
            // 注意：这里为了避免乘法溢出，改用除法
            if (mid > x / mid) {
                // 下一轮搜索区间是 [left..mid - 1]
                right = mid - 1;
            } else {
                // 下一轮搜索区间是 [mid..right]
                left = mid;
            }
        }
        return left;
    }

}
