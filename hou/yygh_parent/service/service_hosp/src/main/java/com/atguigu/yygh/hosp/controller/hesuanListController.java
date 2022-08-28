package com.atguigu.yygh.hosp.controller;

import com.atguigu.common.result.Result;
import com.atguigu.yygh.hosp.service.hesuanListService;
import com.atguigu.yygh.model.hosp.HospitalSet;
import com.atguigu.yygh.model.hosp.hesuanList;
import com.atguigu.yygh.vo.hosp.HospitalSetQueryVo;
import com.atguigu.yygh.vo.hosp.hesuanListQueryVo;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

//admin/hosp/hesuanList/findList
//这是第六步
@RestController
@CrossOrigin
@RequestMapping("/admin/hosp/hesuanList")
public class hesuanListController {

    @Autowired
    private hesuanListService hesuanListService;

    @GetMapping("findListNumber")
    public int findAllhesuanList()
    {
        List<hesuanList> list = hesuanListService.list();
        int size = list.size();
        return size;
    }

    @PostMapping("addHesuanList")
    public Result addList(@RequestBody hesuanList hesuanList){
        boolean save = hesuanListService.save(hesuanList);
        if(save){
            return Result.ok();
        }else{
            return Result.fail();
        }
    }

    @PostMapping("uploadPicture")
    public Result uploadPicture(){
        
        return null;
    }

    //Controller
//    @RequestMapping("/xxxx")
//    public Result queryBaseInfo(@RequestParam("xxx")Long deviceId,@RequestParam("file") MultipartFile file){
//        try {
//            hesuanListService.updatePhoto(deviceId,file);
//            return Result.buildSuccess("xxxx");
//        } catch (Exception e) {
//            e.printStackTrace();
//            return DataResult.buildError(e.getMessage());
//        }
//    }


    //删除
//    @PostMapping("saveHospitalSet")
//    public Result saveHospitalSet(@RequestBody HospitalSet hospitalSet) {
//        //设置状态 1 使用 0 不能使用
//        hospitalSet.setStatus(1);
//        //签名秘钥
//        Random random = new Random();
//        hospitalSet.setSignKey(MD5.encrypt(System.currentTimeMillis()+""+random.nextInt(1000)));
//        //调用service
//        boolean save = hospitalSetService.save(hospitalSet);
//        if(save) {
//            return Result.ok();
//        } else {
//            return Result.fail();
//        }
//    }

    //3 条件查询带分页
    @PostMapping("findPagehesuanList/{current}/{limit}")
    public Result findPageHospSet(@PathVariable long current,
                                  @PathVariable long limit,
                                  @RequestBody
                                          (required = false) hesuanListQueryVo hesuanListQueryVo) {
        //创建page对象，传递当前页，每页记录数
        Page<hesuanList> page = new Page<>(current,limit);
        //构建条件
        QueryWrapper<hesuanList> wrapper = new QueryWrapper<>();
        String name = hesuanListQueryVo.getName();
        long id = hesuanListQueryVo.getId();
//        String cardid = hesuanListQueryVo.getCardid();
        if(!StringUtils.isEmpty(name)) {
            wrapper.like("name",hesuanListQueryVo.getName());
        }
//        if(!StringUtils.isEmpty(cardid)) {
//            wrapper.eq("cardid",hesuanListQueryVo.getCardid());
//        }
        if(!StringUtils.isEmpty(id)) {
            wrapper.like("id",hesuanListQueryVo.getId());
        }
        //调用方法实现分页查询
        Page<hesuanList> pagehesuanList = hesuanListService.page(page, wrapper);
        //返回结果
        return Result.ok(pagehesuanList);
    }

}
