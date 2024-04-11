package com.ruoyi.admin.test;

import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.web.controller.system.SysLoginController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class test1 {
    @Autowired
    SysLoginController sysLoginController;
    @Test
    public void test1(){
         AjaxResult test1r = sysLoginController.getRouters();
        System.out.println(test1r);
    }

}
