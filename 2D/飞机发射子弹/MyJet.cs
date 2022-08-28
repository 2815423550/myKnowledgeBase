using System.Collections;
using System.Collections.Generic;
using UnityEditor.MemoryProfiler;
using UnityEngine;

/** Unity 游戏开发入门课程 
 *  
 *  作者： 邵 发
 * 
 */
public class MyJet : MonoBehaviour
{
    public GameObject myPrefab;

    private float interval = 0.4f;
    private float count = 0;

    // Start is called before the first frame update
    void Start()
    {
        Application.targetFrameRate = 60;
    }

    // Update is called once per frame
    void Update()
    {
        // 定时逻辑
        count += Time.deltaTime;
        if (count >= interval)
        {
            count = 0;
            Fire();
        }

        // 按键响应
        float step = 2.5f * Time.deltaTime;
        
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.Translate(-step, 0, 0); 
        }
        if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.Translate(step, 0, 0);
        }
    }

    private void Fire()
    {
        Vector3 pos = transform.position + new Vector3(0, 1f, 0);
        GameObject bullet = Instantiate(myPrefab, pos, transform.rotation);
    }
}
