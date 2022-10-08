using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

/** 关于UI的用法，参考22，23，24章
 * 
 * 此脚本挂在 Canvas 节点上，用于对UI进行控制
 * 
 */
public class GameUI : MonoBehaviour
{
    // text
    Text scoreText;

    // Start is called before the first frame update
    void Start()
    {
        scoreText = transform.Find("score").GetComponent<Text>();
        scoreText.text = "0";
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void UpdateScore(int score)
    {
        scoreText.text = "" + score;

        // Animation 动画，参考下一篇教程：3D基础篇
        Animation anim = scoreText.GetComponent<Animation>();
        anim.Play();
    }

}
