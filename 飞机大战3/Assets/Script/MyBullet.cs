using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/** Unity 游戏开发入门课程 
 *  
 *  作者： 邵 发
 * 
 */

public class MyBullet : MonoBehaviour
{
    public float speed = 5.5f;

    // Start is called before the first frame update
    void Start()
    {
        this.name = "Bullet";
    }

    // Update is called once per frame
    void Update()
    {
        float dy = speed * Time.deltaTime;

        transform.Translate(0, dy, 0, Space.Self);

        Vector3 sp = Camera.main.WorldToScreenPoint(transform.position);
        if (sp.y > Screen.height)
        {
            Destroy(this.gameObject);  
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if( collision.name.Equals("Monster"))
        {
            // 怪物的销毁工作，在 Monster.cs 中完成
            // Destroy(collision.gameObject);

            Destroy(this.gameObject);
        }
    }
}
