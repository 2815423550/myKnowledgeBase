using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeFace : MonoBehaviour
{
    //第54集

    public Sprite sprite0;

    public Sprite sprite1;

    // public GameObject ball;

    private int index = 0;

    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("Start....");

        Application.targetFrameRate = 60;
    }

    // Update is called once per frame
    void Update()
    {
        if( Input.GetMouseButtonDown(0))
        {
            DoChange();
        }
    }

    void DoChange()
    {
        SpriteRenderer renderer = GetComponent<SpriteRenderer>();
        if(index == 0)
        {
            index = 1;
            renderer.sprite = this.sprite1;
        }
        else
        {
            index = 0;
            renderer.sprite = this.sprite0;
        }
    }
    
}
