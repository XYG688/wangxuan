<template>
  <div class="home">
    <el-container>
      <el-aside width="200px" class="aside">
        <h3 class="title">Element管理后台</h3>
        <el-menu
          default-active="2-1"
          background-color="#222d32"
          text-color="#fff"
          active-text-color="#0a7aed"
          router
        >
          <el-menu-item index="home"
            ><template slot="title">
              <i class="el-icon-eleme"></i>
              <span>首页</span>
            </template></el-menu-item
          >
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="2-1">
              <template>
                <i class="el-icon-apple"></i>
                <span>文章列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-2">
              <template>
                <i class="el-icon-apple"></i>
                <span>多层级路由示例</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <h3 class="title">→</h3>
      </el-aside>
      <el-container>
        <el-header height="40px">
          <div>
            <i class="el-icon-apple"></i>
          </div>
          <div class="header-right">
            <div>
              <i class="el-icon-apple"></i>
            </div>
            <div>
              <i class="el-icon-apple"></i>
            </div>
            <div>
              <i class="el-icon-apple"></i>
            </div>
            <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  Admin<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>退出系统</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer height="40px">
          <p>
            Copyright © 2019 公司名教育科技（北京）有限公司 . All rights
            reserved.
          </p>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.aside {
  height: 100vh;
}
.aside .title {
  background: #0079d9;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: normal;
  color: #fff;
  font-size: 16px;
}
.aside .el-menu {
  height: calc(100vh - 80px);
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0079d9;
  color: #fff;
}
.header-right {
  display: flex;
}
.header-right div {
  margin-right: 20px;
}
.el-footer {
  display: flex;
  align-items: center;
  background: rgb(235, 235, 235);
  font-size: 12px;

}
</style>
