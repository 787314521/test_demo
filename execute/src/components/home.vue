<template>
  <div class="box">
    <!-- 法院logo -->
    <div class="fayuan">
      <img src="../../static/images/fayuan.png" alt />
    </div>

    <!-- 法院名称 -->
    <div class="name">
      <p>{{name}}</p>
    </div>

    <!-- 执行人与被执行人风险评估 -->
    <el-row>
      <el-button @click="toExecuteUp">
        <i class="iconfont icon-xiaoxitongzhitixinglingshenglingdang"></i>
        <span>{{active}}</span>
      </el-button>
    </el-row>
    <el-row>
      <el-button @click="toExecuteDown">
        <i class="iconfont icon-shoukao"></i>
        <span>{{passive}}</span>
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "合肥市蜀山区人民法院",
      active: "申请执行人风险评估",
      passive: "被执行人风险评估",
    };
  },
  methods: {
    toExecuteUp() {
      let _this = this;
      // this.$store.commit("initPageList");
      setTimeout(function() {
        _this.$router.push({ path: "/applyExecute" });
      }, 300);
    },
    toExecuteDown() {
      let _this = this;
      // this.$store.commit("initPageList");
      setTimeout(function() {
        _this.$router.push({ path: "/passiveExecute" });
      }, 300);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  position: relative;
  /* width: 100%; */
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
.fayuan {
  position: relative;
  width: 0.3rem;
  height: 0.3rem;
  left: 50%;
  margin-left: -0.15rem;
  margin-top: 0.2rem;
}
.fayuan img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.name {
  width: 100%;
  margin-top: 0.1rem;
}
p {
  text-align: center;
  font-size: 0.14rem;
  letter-spacing: 0.02rem;
}
.el-row {
  position: relative;
  margin-top: 0.2rem;
  margin-bottom: 0.1rem;
  height: 0.6rem;
}
.el-button {
  position: absolute;
  top: 0;
  width: 100%;
  height: 0.6rem;
}
.el-button span {
  position: absolute;
  left: 0.8rem;
  top: 0.25rem;
  font-size: 0.12rem;
}
.iconfont {
  position: absolute;
  left: 0.3rem;
  top: 0.15rem;
  font-size: 0.3rem;
}
.icon-xiaoxitongzhitixinglingshenglingdang{
  color: #f9ce89;
}
.icon-shoukao{
  color: #bbd7ef;
}
</style>
