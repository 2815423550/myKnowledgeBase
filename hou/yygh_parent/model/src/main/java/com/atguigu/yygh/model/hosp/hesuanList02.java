package com.atguigu.yygh.model.hosp;

import com.atguigu.yygh.model.base.BaseEntity;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

//这是第一步
@Data
@ApiModel(description = "核酸表")
@TableName("hesuan_list02")
public class hesuanList02 extends BaseEntity {
    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "名字")
    @TableField("name")
    private String name;

    @ApiModelProperty(value = "id")
    @TableId
    /*@TableId:将下面这个属性对应为表的主键（插入功能时，mybatis_plus默认以“id”这个字段为主键进行插入操作，
    但如果你表中的主键不叫“id”，则你必须要使用这个注解来标注你表中的主键名字，例如：
    你表中的主键为“uid”，则你下面这个属性名字也要为uid，并且它的上面要标注一个@TableId注解（里面的type属性可以不写）
     */
    private Long id;

//    @ApiModelProperty(value = "排名")
//    @TableField("id")
//    private int id ;

    @ApiModelProperty(value = "身份证号")
    @TableField("cardid")
    private String cardid;

    @ApiModelProperty(value = "电话")
    @TableField("phonenumber")
    private String phonenumber;

    @ApiModelProperty(value = "日期")
    @TableField("date")
    private String date;

    @ApiModelProperty(value = "更多")
    @TableField("more")
    private String more;

    @ApiModelProperty(value = "排号")
    @TableField("uid")
    private int uid;
}
