package com.atguigu.yygh.hosp.controller;


import com.atguigu.yygh.hosp.controller.analyse.Base64Util;
import com.atguigu.yygh.hosp.controller.analyse.FileUtil;
import com.atguigu.yygh.hosp.controller.analyse.HttpUtil;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URLEncoder;

@Api(tags = "人流量分析")
@CrossOrigin
@RestController
@RequestMapping("/admin/NumberAnalyse")
public class NumberAnalyseContriller {

    @GetMapping("peopleNumberAnalyse01")
    public String peopleNumber() {
        String url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/body_num";
        try {
            // 本地文件路径
            String filePath = "C:/Users/28154/Downloads/img/111.png";

            byte[] imgData = FileUtil.readFileByBytes(filePath);
            String imgStr = Base64Util.encode(imgData);
            String imgParam = URLEncoder.encode(imgStr, "UTF-8");
            String param = "image=" + imgParam;
            // 注意这里仅为了简化编码每一次请求都去获取access_token，线上环境access_token有过期时间， 客户端可自行缓存，过期后重新获取。
            String accessToken = "24.d7ed2f0ac538518bdb1c76580dac0c82.2592000.1650871629.282335-25850307";
            String result = HttpUtil.post(url, accessToken, param);
            String substring = result.substring(14, 17);

            return substring;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @GetMapping("peopleNumberAnalyse02")
    public String peopleNumber02() {
        String url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/body_num";

        String   addrs;
        if (1==1){
            addrs="C:/Users/28154/Downloads/img/222.png";
        }
        else {
            addrs="C:/Users/28154/Downloads/img/111.png";
        }

        try {
            // 本地文件路径
            String filePath = addrs;
            byte[] imgData = FileUtil.readFileByBytes(filePath);
            String imgStr = Base64Util.encode(imgData);
            String imgParam = URLEncoder.encode(imgStr, "UTF-8");

            String param = "image=" + imgParam;

            // 注意这里仅为了简化编码每一次请求都去获取access_token，线上环境access_token有过期时间， 客户端可自行缓存，过期后重新获取。
            String accessToken = "24.d7ed2f0ac538518bdb1c76580dac0c82.2592000.1650871629.282335-25850307";

            String result = HttpUtil.post(url, accessToken, param);
            String substring = result.substring(14, 17);
            return substring;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
