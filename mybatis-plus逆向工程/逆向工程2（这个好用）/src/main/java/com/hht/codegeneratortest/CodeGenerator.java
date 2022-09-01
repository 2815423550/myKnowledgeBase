package com.hht.codegeneratortest;


import com.baomidou.mybatisplus.core.toolkit.StringPool;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.InjectionConfig;
import com.baomidou.mybatisplus.generator.config.*;
import com.baomidou.mybatisplus.generator.config.po.TableInfo;
import com.baomidou.mybatisplus.generator.config.rules.DateType;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;

import java.util.ArrayList;
import java.util.List;

/**
 * MyBatis自动生成代码
 *
 **/
public class CodeGenerator {
    public static void main(String[] args) {
        // 代码生成器
        AutoGenerator mpg = new AutoGenerator();
        // 全局配置
        GlobalConfig gc = new GlobalConfig();
        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        // 策略配置
        StrategyConfig strategy = new StrategyConfig();

        //作者
        gc.setAuthor("多伦多的小世界");
        // 数据库url

        //todo tableName表名
        dsc.setUrl("jdbc:mysql://localhost:3306/seckill?characterEncoding=utf-8&useSSL=false");// 数据源配置
        dsc.setDriverName("com.mysql.jdbc.Driver");
        dsc.setUsername("root");

        //todo  数据库密码
        dsc.setPassword("1431891568");
        mpg.setDataSource(dsc);

        //todo 需要创建的表名，什么都不填生成所有
        strategy.setInclude("t_user");

        // 全局配置
        String projectPath = System.getProperty("user.dir");
        gc.setOutputDir(projectPath + "/src/main/java");
        gc.setBaseResultMap(true);
        gc.setOpen(false);
        gc.setDateType(DateType.ONLY_DATE);//设置日期生成策略
        gc.setServiceName("%sService");//去掉service的i前缀
        gc.setSwagger2(true);  // swagger 插件配置
        mpg.setGlobalConfig(gc);

        // 包配置
        PackageConfig pc = new PackageConfig();
        pc.setModuleName("");

        //todo 你的父包名
        pc.setParent("com.generator.demo");
        pc.setMapper("dao");
        mpg.setPackageInfo(pc);

        // 策略配置
        // 数据表映射到实体类命名规则
        strategy.setNaming(NamingStrategy.underline_to_camel);
        // mapper.xml的映射，nochang为了去掉表前缀
        strategy.setColumnNaming(NamingStrategy.nochange);
        // lambok模型
        strategy.setEntityLombokModel(true);
        // 生成 @RestController 控制器
        strategy.setRestControllerStyle(true);
        strategy.setControllerMappingHyphenStyle(true);
        // strategy.setTablePrefix(pc.getModuleName() + "_");
        // todo 配置表名前缀，生成时方便去掉前缀
        strategy.setTablePrefix( "t_");
        mpg.setStrategy(strategy);
        mpg.setTemplateEngine(new FreemarkerTemplateEngine());

        // 自定义配置
        InjectionConfig cfg = new InjectionConfig() {
            @Override
            public void initMap() {
                // to do nothing
            }
        };
        List<FileOutConfig> focList = new ArrayList<>();
        focList.add(new FileOutConfig("/templates/mapper.xml.ftl") {
            @Override
            public String outputFile(TableInfo tableInfo) {
                //todo 自定义输入文件名称
                return projectPath + "/src/main/resources/mapper/" + pc.getModuleName()
                        + "/" + tableInfo.getEntityName() + "Mapper" + StringPool.DOT_XML;
            }
        });
        cfg.setFileOutConfigList(focList);
        mpg.setCfg(cfg);

        // 自定义模板配置
        TemplateConfig tc = new TemplateConfig();
        tc.setServiceImpl("/templates/serviceImpl.java");
        tc.setXml(null);
        mpg.setTemplate(tc);

        mpg.execute();
    }
}

