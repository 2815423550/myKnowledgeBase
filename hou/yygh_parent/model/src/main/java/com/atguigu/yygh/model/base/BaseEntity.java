package com.atguigu.yygh.model.base;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Data
public class BaseEntity implements Serializable {

    @ApiModelProperty(value = "id")
    @TableId(type = IdType.AUTO)
    /*@TableId:将下面这个属性对应为表的主键（插入功能时，mybatis_plus默认以“id”这个字段为主键进行插入操作，
    但如果你表中的主键不叫“id”，则你必须要使用这个注解来标注你表中的主键名字，例如：
    你表中的主键为“uid”，则你下面这个属性名字也要为uid，并且它的上面要标注一个@TableId注解（里面的type属性可以不写）
     */
    private Long id;

//    @ApiModelProperty(value = "创建时间")
//    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
//    @TableField("create_time")
//    private Date createTime;

//    @ApiModelProperty(value = "更新时间")
//    @TableField("update_time")
//    private Date updateTime;

//    @ApiModelProperty(value = "逻辑删除(1:已删除，0:未删除)")
//    @TableLogic
//    @TableField("is_deleted")
//    private Integer isDeleted;

    @ApiModelProperty(value = "其他参数")
    @TableField(exist = false)
    private Map<String,Object> param = new HashMap<>();
}
