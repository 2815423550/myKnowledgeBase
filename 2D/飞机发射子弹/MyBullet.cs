using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/** Unity 入门课程 
 *  
 *  作者： 邵 发
 * 
 */

public class MyBullet : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {        
    }

    // Update is called once per frame
    void Update()
    {
        float step = 1.8f * Time.deltaTime;

        transform.Translate(0, step, 0, Space.Self);

        //子弹超过屏幕边界就销毁
        Vector3 sp = Camera.main.WorldToScreenPoint(transform.position);
        if (sp.y > Screen.height)
        {
            Destroy(this.gameObject);  // 不要写成 Destroy(this) ，参考视频中的说明
        }
    }
}
