package com.hht.demo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.mybatisplus.extension.service.additional.query.impl.QueryChainWrapper;
import com.hht.demo.entity.User;
import com.hht.demo.entity.UserVo;
import com.hht.demo.mapper.UserMapper;
import com.hht.demo.service.IUserService;
import com.hht.demo.service.impl.UserServiceImpl;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import sun.invoke.empty.Empty;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author 黄华弢
 * @since 2022-04-16
 */
@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private IUserService iUserService;



    //    登录
    @PostMapping("/login/{username}/{password}")
    public String login(@RequestParam String username,
                        @RequestParam String password) {
        User user = new User();
        user.setPassword(password);
        user.setUsername(username);

        List<User> list = iUserService.list();
        for (User user1:list) {
            if (user1.getUsername().equals(user.getUsername()) ) {
                if (user1.getPassword().equals(user.getPassword())){
//                    System.out.println("登录成功");
                    return "登录成功";
                }
            }
        }
//        System.out.println("登录失败");
        return "登录失败";
    }

    //    注册
    @PostMapping("/add/{username}/{password}")
    public String addUser(@RequestParam String username,
                          @RequestParam String password) {
        User user = new User();
        user.setPassword(password);
        user.setUsername(username);
        boolean save = iUserService.save(user);
        return "注册成功";
    }

    @GetMapping("/404")
    public String test404()
    {
        return "请先登录";
    }

    @GetMapping("test")
    public String test()
    {
        return "????";
    }
}
