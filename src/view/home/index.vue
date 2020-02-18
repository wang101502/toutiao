<template>
  <div class="container-home">
    <el-container class="home-container">
      <el-aside class="my-aside" :width="isCollapse?'64px':'200px'">
        <div class="logo" :class="{close:isCollapse}"></div>
        <el-menu
          default-active="/"
          class="el-menu-vertical"
          text-color="#fff"
          background-color="#002033"
          style="border-right:0"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <el-menu-item v-for="item in navTab" :key="item.id" :index="item.link">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="my-header">
          <div class="header-left">
            <i class="el-icon-s-fold" @click="toggleMenu()"></i>
            <span class="text">江苏传智播客教育科技有限公司</span>
          </div>
          <el-dropdown class="header-right" :hide-on-click="false">
            <span class="el-dropdown-link">
              <img src="@/assets/images/avatar.jpg" alt />
              <span class="text">我的在线→</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-setting" @click.native="settingTo()">个人设置</el-dropdown-item>
              <el-dropdown-item icon="el-icon-unlock" @click.native="logout()">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      navTab: [
        {
          id: "1",
          name: "首页",
          icon: "el-icon-s-home",
          link: "/"
        },
        {
          id: "2",
          name: "内容管理",
          icon: "el-icon-document",
          link: "/article"
        },
        {
          id: "3",
          name: "素材管理",
          icon: "el-icon-picture",
          link: "/image"
        },
        {
          id: "4",
          name: "发布文章",
          icon: "el-icon-s-promotion",
          link: "/publish"
        },
        {
          id: "5",
          name: "评论管理",
          icon: "el-icon-chat-dot-round",
          link: "/comment"
        },
        {
          id: "6",
          name: "粉丝管理",
          icon: "el-icon-present",
          link: "/fans"
        },
        {
          id: "7",
          name: "个人设置",
          icon: "el-icon-setting",
          link: "/setting"
        }
      ],
      isCollapse: false
    };
  },
  methods: {
    toggleMenu() {
      this.isCollapse = !this.isCollapse;
    },
    //跳转到个人设置页面
    settingTo() {
      this.$router.push({ name: "setting" });
    },
    // 退出登录
    logout() {
      window.sessionStorage.removeItem("wxq-toutiao");
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped lang='less'>
.container-home {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.home-container {
  width: 100%;
  height: 100%;
}
.my-aside {
  background: #002033;
  .logo {
    width: 100%;
    height: 60px;
    background: #002840 url(~@/assets/images/logo_admin.png) no-repeat
      center/140px auto;
  }
  .close {
    background-image: url(~@/assets/images/logo_admin_01.png);
    background-size: 36px auto;
  }
}
.my-header {
  border-bottom: 1px solid #ddd;
  line-height: 60px;
  .header-left {
    float: left;
    .el-icon-s-fold {
      font-size: 26px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
    }
  }
  .header-right {
    float: right;
    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
      vertical-align: middle;
    }
  }
}
</style>