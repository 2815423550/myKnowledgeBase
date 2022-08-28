package com.hht.demo.entity;

import lombok.Data;

@Data
public class UserVo {
    private String username;

    /**
     * 密码
     */
    private String password;
}
