package com.atguigu.yygh.hosp.controller;


import com.atguigu.common.result.Result;
import com.atguigu.yygh.hosp.controller.analyse.Base64Util;
import com.atguigu.yygh.hosp.controller.analyse.FileUtil;
import com.atguigu.yygh.hosp.controller.analyse.HttpUtil;
import com.atguigu.yygh.hosp.service.hesuanList02Service;
import com.atguigu.yygh.model.hosp.hesuanList02;
import com.atguigu.yygh.vo.hosp.hesuanList02QueryVo;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.net.URLEncoder;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/admin/hosp/hesuanList02")
public class hesuanList02Controller  {
    @Autowired
    private hesuanList02Service hesuanList02Service;

    @GetMapping("findListNumber")
    public int findAllhesuanList()
    {
//        List<hesuanList02> list = hesuanList02Service.list();
//        int size = list.size();
//        return size;
        int count = hesuanList02Service.count();
        return count;
    }

//    @RequestMapping("hello")
//    public String hello()
//    {
//        return "hello world111111112222222223333333333";
//    }

    @PostMapping("addHesuanList")
    public Result addList(@RequestBody hesuanList02 hesuanList){
        boolean save = hesuanList02Service.save(hesuanList);
//        return save;
        if(save){
            return Result.ok();
        }else{
            return Result.fail();
        }
    }

    //3 条件查询带分页
    @PostMapping("findPagehesuanList/{current}/{limit}")
    public Result findPageHospSet(@PathVariable long current,
                                  @PathVariable long limit,
                                  @RequestBody(required = false) hesuanList02QueryVo hesuanList02QueryVo) {
        //创建page对象，传递当前页，每页记录数
        Page<hesuanList02> page = new Page<>(current,limit);
        //构建条件
        QueryWrapper<hesuanList02> wrapper = new QueryWrapper<>();
        String name = hesuanList02QueryVo.getName();
//        String cardid = hesuanList02QueryVo.getCardid();
        long id = hesuanList02QueryVo.getId();
        if(!StringUtils.isEmpty(name)) {
            wrapper.like("name",hesuanList02QueryVo.getName());
        }
        if(!StringUtils.isEmpty(id)) {
            wrapper.like("id",hesuanList02QueryVo.getId());
        }
        //调用方法实现分页查询
        Page<hesuanList02> pagehesuanList02 = hesuanList02Service.page(page, wrapper);
        //返回结果
        return Result.ok(pagehesuanList02);
    }


}
