using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor.Build.Reporting;
using UnityEngine;
using UnityEngine.UIElements;

public class MyJet : MonoBehaviour
{
    private bool drag = false;
    private Vector3 lastMousePos;

    // Start is called before the first frame update
    void Start()
    {
        Application.targetFrameRate = 60;
    }

    // Update is called once per frame
    void Update()
    {
        if ( Input.GetMouseButtonDown(0) )
        {
            Vector3 pos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            pos.z = 0;    // 把Z坐标置0，放到2D平面上来

            float distance = (pos - transform.position).magnitude;
            if(distance < 1.5f)
            {
                drag = true;
                lastMousePos = pos;
            }
        }

        if( Input.GetMouseButtonUp(0))
        {
            drag = false;
        }


        // 检查 ‘当前鼠标左键是否按下’ ，此为状态检查
        if ( drag )
        {
            Vector3 pos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            pos.z = 0;    // 把Z坐标置0，放到2D平面上来

            Vector3 delta = pos - lastMousePos;
            transform.position += delta;

            lastMousePos = pos;
        }

    }

    

}
