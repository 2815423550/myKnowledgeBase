package 这也不是第三天;

public class 删除排序链表中的重复元素 {
    class ListNode {
        int val;
        ListNode next;
    }

    public ListNode method(ListNode head) {
        if (head == null) {
            return head;
        }

        ListNode cur = head;
        /*
        head只是用来标记这个链表的头节点地址，cur循环之后发生的修改，这个链表也就发生了修改。
        返回head也就是返回这个链表了。如果你用head去移动，之后你会找不到这个头节点的地址。cur也相当于head的temp。
         */

        while (cur.next != null) {
            if (cur.val == cur.next.val) {
                cur.next = cur.next.next;
            } else cur = cur.next;
        }
        return head;
    }
}
