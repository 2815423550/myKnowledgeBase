using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MyJet : MonoBehaviour
{
    //（注意屏幕坐标与世界坐标的区别）

    private bool upward = true; // 飞行的方向

    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        if(upward && transform.position.y > 5 )
        {
            upward = false;
            transform.localEulerAngles = new Vector3(0, 0, 180);
        }
        if(!upward && transform.position.y < -5)
        {
            upward = true;
            transform.localEulerAngles = new Vector3(0, 0, 0);
        }

        float step = 1.6f * Time.deltaTime; // 每帧移动的距离
        transform.Translate(0, step, 0, Space.Self );
    }
}
