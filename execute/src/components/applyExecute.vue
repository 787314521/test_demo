<template>
  <div class="box">
    <div class="title">
      <p>请根据您的情况选择</p>
    </div>

    <el-row>
      <el-button @click="click1" class="buttonCommon button1">民事执行案件风险评估</el-button>
      <el-button @click="click2" class="buttonCommon button2">执行仲裁裁决风险评估</el-button>
      <el-button @click="click3" class="buttonCommon button3">执行公证债权文书风险评估</el-button>
      <el-button @click="click4" class="buttonCommon button4">诉前保全风险评估</el-button>
      <el-button @click="click5" class="buttonCommon button5">诉讼保全风险评估</el-button>
      <el-button @click="click6" class="buttonCommon button6">先予执行风险评估</el-button>
      <el-button @click="click7" class="buttonCommon button7">执行风险场景模拟</el-button>
    </el-row>

    <!-- 返回上一页 -->
    <el-row>
      <el-button @click="v_click" class="scene">返回上一页</el-button>
    </el-row>
  </div>
</template>

<script>
let timer = null;
export default {
  data() {
    return {};
  },
  methods: {
    click1(){
      let _this = this;
      this.$store.commit("initPageList");
      clearTimeout(timer);
      timer = setTimeout(function() {
        _this.$router.push({ path: "/ms_one" });
      }, 300);
    },
    click2(){
      let _this = this;
      this.$store.commit("initPageList");
      clearTimeout(timer);
      timer = setTimeout(function() {
        _this.$router.push({ path: "/zc_one" });
      }, 300);
    },
    click3(){
      let _this = this;
      this.$store.commit("initPageList");
      clearTimeout(timer);
      timer = setTimeout(function() {
        _this.$router.push({ path: "/gz_one" });
      }, 300);
    },
    click4(){
      let _this = this;
      this.$store.commit("initPageList");
      clearTimeout(timer);
      timer = setTimeout(function() {
        _this.$router.push({ path: "/sq_one" });
      }, 300);
    },
    click5(){
      let _this = this;
      this.$store.commit("initPageList");
      clearTimeout(timer);
      timer = setTimeout(function() {
        _this.$router.push({ path: "/ss_one" });
      }, 300);
    },
    click6(){
      let _this = this;
      this.$store.commit("initPageList");
      clearTimeout(timer);
      timer = setTimeout(function() {
        _this.$router.push({ path: "/xy_one" });
      }, 300);
    },
    click7() {
      let _this = this;
      this.$store.commit("initPageList");
      clearTimeout(timer);
      timer = setTimeout(function() {
        _this.$router.push({ path: "/apply" });
      }, 300);
    },
    v_click() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  // padding-left: 0.15rem;
  // padding-right: 0.15rem;
  p {
    text-align: center;
    font-size: 0.14rem;
    letter-spacing: 0.02rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .buttonCommon {
    position: absolute;
    width: 100%;
    margin-left: 0rem;
    height: 0.5rem;
  }
  .el-radio {
    position: absolute;
    left: 0;
    top: 0.9rem;
    width: 100%;
    height: 0.5rem;
    line-height: 0.55rem;
    margin-right: 0rem;
    border-radius: 0rem;
    background-color: #fff;
  }
  .scene {
    position: absolute;
    width: 2rem;
    left: 50%;
    top: 3.7rem;
    margin-left: -1rem;
    border-color: #409eff;
    color: #409eff;
    border-radius: 0.05rem;
  }
  .button2 {
    margin-top: 0.5rem;
  }
  .button3 {
    margin-top: 1rem;
  }
  .button4 {
    margin-top: 1.5rem;
  }
  .button5 {
    margin-top: 2rem;
  }
  .button6 {
    margin-top: 2.5rem;
  }
  .button7 {
    margin-top: 3rem;
  }
}
</style>
<style scoped>
/deep/ .el-radio__input {
  position: absolute;
  top: 0.2rem;
  font-size: 0.14rem;
}
/deep/ .el-radio__label {
  position: absolute;
  top: -0.02rem;
  left: 0.2rem;
  font-size: 0.14rem;
  color: #000;
}
</style>