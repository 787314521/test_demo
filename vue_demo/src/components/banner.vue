<template>
  <div class="box">
    <Header></Header>
    <el-carousel :interval="5000" arrow="hover" trigger="click" height="710px">
      <el-carousel-item v-for="item in 5" :key="item">
        <!-- <h3>{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Header from "./header";
export default {
  data() {
    return {};
  },
  methods: {},
  components: { Header }
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 710px;

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(1n) {
    background-image: url("../../static/images/banner/4.png");
  }
  .el-carousel__item:nth-child(3n-1) {
    background-image: url("../../static/images/banner/3.png");
  }
  .el-carousel__item:nth-child(3n + 1) {
    background-image: url("../../static/images/banner/2.png");
  }
  .el-carousel__item:nth-child(4n-1) {
    background-image: url("../../static/images/banner/1.png");
  }
  .el-carousel__item:last-child {
    background-image: url("../../static/images/banner/5.png");
  }
}
</style>
<style>
.el-carousel__button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.0);
  border: 1px solid #fff;
  margin-right: 25px;
}
.el-carousel__indicator.is-active button{
  border: 1px solid #41c3ed;
}

</style>