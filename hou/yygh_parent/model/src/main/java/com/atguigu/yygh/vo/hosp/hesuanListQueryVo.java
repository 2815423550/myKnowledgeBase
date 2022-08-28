package com.atguigu.yygh.vo.hosp;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import io.swagger.annotations.ApiModelProperty;

@Data
public class hesuanListQueryVo {

    @ApiModelProperty(value = "姓名")
    private String name;

//    @ApiModelProperty(value = "卡号")
//    private String cardid;

    @ApiModelProperty(value = "预约号")
    private long id;

}
