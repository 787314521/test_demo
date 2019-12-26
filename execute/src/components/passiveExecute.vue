<template>
  <div class="box">
    <div class="title">
      <p>您是否需要了解被执行人在执行过程中风险？</p>
    </div>

    <el-radio v-model="radio" class="el-radio1" border @change="change">{{name}}</el-radio>

    <!-- 返回上一页 -->
    <el-row>
      <el-button @click="v_click">返回上一页</el-button>
    </el-row>
  </div>
</template>

<script>
let timer=null
export default {
  data() {
    return {
      radio: "",
      name: "我需要了解！"
    };
  },
  methods: {
    change() {
      let _this = this;
      clearTimeout(timer);
      timer = setTimeout(function() {
        _this.$router.push({ path: "/passiveDetail" });
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
  padding-left: 0.15rem;
  padding-right: 0.15rem;
  p {
    text-align: center;
    font-size: 0.14rem;
    letter-spacing: 0.02rem;
    margin-top: 0.2rem;
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
  .el-button {
    position: absolute;
    width: 2rem;
    left: 50%;
    top: 1rem;
    margin-left: -1rem;
    border-color: #409eff;
    color: #409eff;
    border-radius: 0.05rem;
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