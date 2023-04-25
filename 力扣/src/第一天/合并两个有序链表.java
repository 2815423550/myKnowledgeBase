package 第一天;

import java.util.Arrays;

public class 合并两个有序链表 {

    class LinkNode
    {
        int val;
        LinkNode next;
    }

    public LinkNode addTwoLink(LinkNode l1,LinkNode l2)
    {
        //创建一个新的链表
        LinkNode head=new LinkNode();

        while (l1!=null&&l2!=null)
        {
               if (l1.val>l2.val)
               {
                   head.next=l2;
                   l2=l2.next;
               }
               else
               {
                   head.next=l1;
                   l2=l2.next;
               }
               head=head.next;
        }

        if (l1!=null)   head.next=l1;
        if (l2!=null)   head.next=l2;

        return head.next ;    //因为头节点没有东西，所以返回头节点的下一个节点开始的链表
    }
}
