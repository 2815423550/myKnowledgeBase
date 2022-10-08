using System.Collections;
using System.Collections.Generic;
using UnityEditor.MemoryProfiler;
using UnityEngine;


public class MyJet : MonoBehaviour
{
    public GameObject bulletPrefab;
    public float moveSpeed = 2.5f;

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
        float step = moveSpeed * Time.deltaTime;
        
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.Translate(-step, 0, 0); 
        }
        if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.Translate(step, 0, 0);
        }
        if (Input.GetKey(KeyCode.UpArrow))
        {
            transform.Translate(0, step, 0);
        }
        if (Input.GetKey(KeyCode.DownArrow))
        {
            transform.Translate(0, -step, 0);
        }
    }

    private void Fire()
    {
        Vector3 pos = transform.position + new Vector3(0, 1f, 0);
        GameObject bullet = Instantiate(bulletPrefab, pos, transform.rotation);
    }

    //飞机触碰怪物，飞机销毁
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.name.Equals("Monster"))
        {
            Destroy(this.gameObject);

        }
    }
}
