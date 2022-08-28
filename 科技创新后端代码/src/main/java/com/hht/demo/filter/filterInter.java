package com.hht.demo.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class filterInter implements WebMvcConfigurer {
    @Autowired
    private filter filter;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(filter).addPathPatterns("/**")
                .excludePathPatterns("/**/login/**/*","/**/logon");
        WebMvcConfigurer.super.addInterceptors(registry);
    }
}
