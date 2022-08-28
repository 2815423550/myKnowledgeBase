using System.Collections;
using System.Collections.Generic;
using UnityEditor.Build.Reporting;
using UnityEngine;

public class MyJet : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        // 调整机头方向，指向目标物体
        Vector3 face = this.transform.up;
        GameObject target = GameObject.Find("球");
        Vector3 direction = target.transform.position - this.transform.position;
        float angle = Vector3.SignedAngle(face, direction, Vector3.forward);
        this.transform.Rotate(0, 0, angle);

    }

    // Update is called once per frame
    void Update()
    {
        float step = 1.2f * Time.deltaTime;

        transform.Translate(0, step, 0, Space.Self);
    }
}
