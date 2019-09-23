<template>
  <div class="box">
    <div class="logo"></div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="change">首页</el-menu-item>
      <!-- <el-menu-item index="2" @click="itemHover">产品中心</el-menu-item> -->
      <el-submenu index="2">
        <template slot="title">产品中心</template>

        <el-submenu index="2-4">
          <template slot="title">行业应用</template>
          <el-menu-item index="2-4-1">信息发布</el-menu-item>
          <el-menu-item index="2-4-2">触摸查询</el-menu-item>
          <el-menu-item index="2-4-3">多窗口展示</el-menu-item>
          <el-menu-item index="2-4-4">签名拍照</el-menu-item>
          <el-menu-item index="2-4-5">电子翻书</el-menu-item>
          <el-menu-item index="2-4-6">滑轨屏</el-menu-item>
          <el-menu-item index="2-4-7">时间轴</el-menu-item>
        </el-submenu>
        <el-menu-item index="2-1">硬件终端</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" @click="change">解决方案</el-menu-item>
      <el-menu-item index="4" @click="change">服务支持</el-menu-item>
      <el-menu-item index="5" @click="change">成功案例</el-menu-item>
      <el-menu-item index="6" @click="change">关于我们</el-menu-item>
    </el-menu>
    <div class="nav-button">申请试用</div>
    <ul class="first-level" ref="first">
      <li v-for="item in firstInfo" :key="item.title" @click="clickFirst">{{item.title}}</li>
    </ul>
    <ul class="second-level" ref="second">
      <li v-for="item in secondInfo" :key="item.title">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "",
      activeIndex2: "",
      firstInfo: [
        {
          title: "行业应用"
        },
        {
          title: "硬件终端"
        }
      ],
      secondInfo: [
        {
          title: "信息发布"
        },
        {
          title: "触摸查询"
        },
        {
          title: "多窗口展示"
        },
        {
          title: "签名拍照"
        },
        {
          title: "电子翻书"
        },
        {
          title: "滑轨屏"
        },
        {
          title: "时间轴"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    itemHover() {
      this.$refs.first.style.display = "block";
    },
    clickFirst() {
      this.$refs.second.style.display = "block";
    },
    change() {
      this.$refs.first.style.display = "none";
      this.$refs.second.style.display = "none";
    }
  }
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.box {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  height: 80px;
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);
  .logo {
    width: 89px;
    height: 34px;
    background-image: url("../../static/images/Header/nab_logo.png");
    margin-left: 115px;
    margin-top: 24px;
  }
  .el-menu-demo {
    height: 80px;
    margin-left: 700px;
    background-color: rgba(0, 0, 0, 0);
    .el-menu-item {
      height: 83px;
      line-height: 80px;
      border-bottom: 4px solid #03bdf0;
      font-size: 16px;
      color: #fff;
      margin-left: 20px;
    }
  }

  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #0ac0ff;
  }
  .el-menu-item .is-active {
    background-image: url("../../static/images/Header/nav_btn.png");
  }
  .el-menu-item .item-menu:hover .first-level {
    display: block;
  }
  .first-level {
    position: absolute;
    top: 84px;
    left: 980px;
    display: none;
    li {
      width: 180px;
      height: 44px;
      background-color: rgba(0, 0, 0, 0.8);
      font-size: 14px;
      color: #fff;
      text-align: center;
      line-height: 42px;
    }
    :hover {
      color: #116fbe;
      background-color: #1f233b;
    }
  }
  .second-level {
    position: absolute;
    top: 84px;
    left: 1160px;
    display: none;
    li {
      width: 145px;
      height: 44px;
      background-color: rgba(0, 0, 0, 0.8);
      font-size: 14px;
      color: #fff;
      text-align: center;
      line-height: 42px;
    }
    :hover {
      color: #116fbe;
      background-color: #1f233b;
    }
  }
  .nav-button {
    position: absolute;
    top: 20px;
    left: 1630px;
    width: 125px;
    height: 36px;
    background-image: url("../../static/images/Header/nav_btn.png");
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 34px;
  }
  .item-menu {
    :hover {
      .first-level {
        display: block;
      }
    }
  }
}
</style>
<style>
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 83px;
  line-height: 81px;
  font-size: 16px;
  color: #fff;
}
.el-menu--horizontal > .el-submenu:focus .el-submenu__title,
.el-menu--horizontal > .el-submenu:hover .el-submenu__title {
  color: #0ac0ff;
  background-color: rgba(0, 0, 0, 0);
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 4px solid #409eff;
  color: #fff;
}
</style>