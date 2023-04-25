package tsst;

public class demo04 {
    public static void main(String[] args) {

        System.out.println(add(5));
    }

    public static int add(int n)
    {
        if (n==1||n==2)
        {
            return 1;
        }
        return add(n-1)+add(n-2);
    }
}
