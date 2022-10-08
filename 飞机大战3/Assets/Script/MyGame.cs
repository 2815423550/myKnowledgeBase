using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MyGame : MonoBehaviour
{
    public int score = 0;

    Transform ui;

    // Start is called before the first frame update
    void Start()
    {
        Application.targetFrameRate = 60;

        //
        ui = GameObject.Find("Canvas").transform;

        ClearScore();

    }

    // Update is called once per frame
    void Update()
    {

    }

    public void ClearScore()
    {
        this.score = 0;

        // 以0作为消息参数时，必须使用3参数形式
        ui.SendMessage("UpdateScore",0, SendMessageOptions.RequireReceiver);
    }

    // 击杀怪物后得分
    public void AddScore(int score)
    {
        this.score += score;
        ui.SendMessage("UpdateScore", this.score);
    }
}
