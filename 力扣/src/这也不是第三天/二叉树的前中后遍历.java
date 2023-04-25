package 这也不是第三天;

import java.util.ArrayList;
import java.util.List;

public class 二叉树的前中后遍历 {

    //先定义二叉树的类
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    //前序遍历
    public List<Integer> preorderTraversal(TreeNode root) {

        //定义一个集合来存储遍历之后的结果
        List<Integer> result = new ArrayList<Integer>();

        //退出条件:root节点为空
        if(root == null){
            return result;
        }

        //前序遍历的逻辑：遍历根节点，左节点，右节点
        result.add(root.val);
        result.addAll(preorderTraversal(root.left));
        result.addAll(preorderTraversal(root.right));
        //List集合中的add()方法是添加单独的元素进行存储，而addAll()方法是将指定的collection集合所有的元素添加到当前List集合中
        //传递参数
        //传递新的根节点

        /*中序遍历
        result.addAll(preorderTraversal(root.left));
        result.add(root.val);
        result.addAll(preorderTraversal(root.right));
         */

        /*后序遍历
        result.addAll(preorderTraversal(root.left));
        result.addAll(preorderTraversal(root.right));
        result.add(root.val);
         */

        return result;
    }

    /*总结：
            本题用到的递归算法，基本上递归都有一个固定的算法，记住就好了
     */

}
