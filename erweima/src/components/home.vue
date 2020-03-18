<template>
  <div class="box">
    <span class="title">创建用户</span>
    <div class="pic">
      <img src="../assets/images/bg/登陆插画@2x.png" alt />
    </div>
    <div class="mark">
      <span>mark：</span>
      <input
        id="inputId"
        v-model="codeId"
        type="text"
        style=" border-bottom: #fff 1px solid;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    background-color: transparent;
"
      />
    </div>
    <div class="next" @click="showCode">
      <img src="../assets/images/bt/bt1@2x.png" alt />
      <div class="word">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      codeId: ""
    };
  },
  mounted() {
    // console.log(this.codeId)
  },
  methods: {
    showCode() {
      let inp = document.querySelector("#inputId");
      if (!inp.value || !inp.value.trim()) {
        console.log("为空");
        return;
      }
      this.$router.push({ path: "/code", query: { name: this.codeId } });
    }
  }
  // mounted() {
  //   this.$axios({
  //     methods: "get",
  //     url: "?mac_mark=test001#/"
  //   })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rem: 46.875rem;
.box {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-image: url("../../src/assets/images/bg/tongyibg.png");

  .title {
    display: block;
    margin-top: 20 / @rem;
    color: #fff;
    font-size: 10 / @rem;
    font-weight: 600;
    text-align: center;
  }
  .pic {
    position: relative;
    margin: 0 auto;
    margin-top: 0.4rem;
    img {
      display: block;
      margin: 0 auto;
      width: 2rem;
      height: 2rem;
    }
  }
  .mark {
    margin: 0 auto;
    margin-top: -20/@rem;
    text-align: center;
    width: 100%;
    span {
      color: #fff;
      font-size: 0.2rem;
      font-weight: 600;
    }
    input {
      outline: none;
      color: #fff;
      font-size: 0.15rem;
      text-indent: 0.02rem;
      width: 1.7rem;
      margin-left: -0.35rem;
    }
  }
  .next {
    position: relative;
    margin: 0 auto;
    width: 1.5rem;
    height: 0.6rem;
    img {
      float: left;
      width: 100%;
    }
    .word {
      position: absolute;
      width: 1rem;
      height: 0.2rem;
      left: 50%;
      margin-left: -0.5rem;
      top: 50%;
      margin-top: -0.22rem;
      color: #fff;
      text-align: center;
      font-size: 8 / @rem;
      font-weight: 600;
    }
  }
}
</style>
