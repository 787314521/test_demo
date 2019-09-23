<template>
  <div class="box">
    <div class="word">
      <p class="English">Solution</p>
      <p class="chinese">解决方案</p>
    </div>
    <div class="solution">
      <p>智慧展馆解决方案</p>
    </div>
    <!-- 功能说明开关 -->
    <div class="distribution">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="功能说明">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
      </el-form>
    </div>
    <!-- 展馆模型图 -->
    <div class="model-image">
      <div class="circle-one"></div>
      <div class="circle-two"></div>
      <div class="circle-three"></div>
      <div class="circle-four"></div>
      <div class="circle-five"></div>
      <div class="circle-six"></div>
      <div class="circle-seven"></div>
      <div class="circle-eight"></div>
    </div>

    <!-- 了解更多 -->
    <div class="learn-more">
      <p class="title">卓越互动，尽在亿迈杰</p>
      <p class="min-title">亿迈杰，以信息交互展示为核心的解决方案提供商</p>
      <div class="nav-button">了解更多</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  .word {
    margin: 0 auto;
    width: 300px;
    height: 72px;
    text-align: center;
    margin-top: 95px;
    border-bottom: 4px solid #0b83e1;
    .English {
      font-size: 14px;
      color: #0b83e1;
    }
    .chinese {
      font-size: 20px;
      font-weight: 700;
    }
  }
  .solution {
    width: 150px;
    height: 20px;
    margin: 0 auto;
    margin-top: 56px;
    p {
      font-size: 18px;
      color: #0b83e1;
    }
  }
  .distribution {
    position: absolute;
    right: 250px;
    top: 70px;
  }
  .model-image {
    position: relative;
    width: 1164px;
    height: 888px;
    background-image: url("../../static/images/newImages/展馆模型图.png222拷贝.png");
    margin: 0 auto;
    margin-top: 68px;
    div{
      width: 52px;
      height: 52px;
    }
    .circle-one{
      position: absolute;
      left: 96px;
      top: 155px;
      background-image: url("../../static/images/newImages/组23拷贝8.png");
    }
    .circle-two{
      position: absolute;
      left: 326px;
      top: 113px;
      background-image: url("../../static/images/newImages/组23拷贝8.png");
    }
    .circle-three{
      position: absolute;
      left: 422px;
      top: 62px;
      background-image: url("../../static/images/newImages/组23拷贝8.png");
    }
    .circle-four{
      position: absolute;
      left: 359px;
      top: 183px;
      background-image: url("../../static/images/newImages/组23拷贝8.png");
    }
    .circle-five{
      position: absolute;
      left: 687px;
      top: 184px;
      background-image: url("../../static/images/newImages/组23拷贝8.png");
    }
    .circle-six{
      position: absolute;
      left: 415px;
      top: 483px;
      background-image: url("../../static/images/newImages/组23拷贝8.png");
    }
    .circle-seven{
      position: absolute;
      left: 633px;
      top: 428px;
      background-image: url("../../static/images/newImages/组23拷贝8.png");
    }
    .circle-eight{
      position: absolute;
      left: 967px;
      top: 418px;
      background-image: url("../../static/images/newImages/组23拷贝8.png");
    }
  }
  .learn-more {
    width: 100%;
    height: 445px;
    background-image: url("../../static/images/newImages/公司介绍.png");
    margin-top: 95px;
    text-align: center;
    overflow: hidden;
    p {
      color: #fff;
      letter-spacing: 5px;
    }
    .title {
        margin-top: 162px;
      font-size: 30px;
    }
    .min-title {
      margin-top: 20px;
      font-size: 16px;
    }
    .nav-button {
      margin: 0 auto;
      margin-top: 50px;
      width: 125px;
      height: 36px;
      background-image: url("../../static/images/Header/nav_btn.png");
      font-size: 16px;
      color: #fff;
      text-align: center;
      line-height: 34px;
    }
  }
}
</style>

<style>
.el-form-item__label {
  font-size: 16px;
  color: #0b83e1;
  font-weight: 500;
}
.el-switch.is-checked .el-switch__core {
  border-color: #dcdfe6;
  background-color: #dcdfe6;
}
.el-switch.is-checked .el-switch__core::after {
  background-color: #01c9f6;
}
</style>