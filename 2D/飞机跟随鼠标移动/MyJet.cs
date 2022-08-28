using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor.Build.Reporting;
using UnityEngine;
using UnityEngine.UIElements;

public class MyJet : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Application.targetFrameRate = 60;
    }

    // Update is called once per frame
    void Update()
    {

        // 检查 ‘当前鼠标左键是否按下’ ，此为状态检查
        if (Input.GetMouseButton(0))
        {
            Vector3 pos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            pos.z = 0;    // 把Z坐标置0，放到2D平面上来

            // 控制机头的指向
            SetDirection(pos);
        }

        float step = 1.2f * Time.deltaTime;
        transform.Translate(0, step, 0, Space.Self);
    }

    void SetDirection(Vector3 targetPos)
    {
        Vector3 face = transform.up; // 头部指向
        Vector3 direction = targetPos - transform.position;

        // 参考第11，12章
        float angle = Vector3.SignedAngle(face, direction, Vector3.forward);
        transform.Rotate(0, 0, angle);
    }

}
