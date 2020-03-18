<template>
  <div class="box">
    <span class="title">生成配置</span>
    <div class="show">
      <span>展示地址：</span>
      <div id="qrcode" ref="qrcode"></div>
    </div>
    <div class="configuration">
      <span>配置地址：</span>
      <div id="qrcode2" ref="qrcode2"></div>
    </div>
    <div class="save">
      <img src="../assets/images/bt/bt1@2x.png" alt="">
      <div class="word">保存</div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      qr_code: "", //展示地址二维码
      qr_code2: "" //配置地址二维码
    };
  },
  mounted() {
    let code = this.$route.query.name;
    console.log("code:"+code);
    this.qr_code=code
    this.qr_code2=code
    this.getQrcode();
    this.getQrcode2();
  },
  watch: {
    $route: "getParams"
  },
  components: {
    QRCode
  },
  methods: {
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        // width: 150,
        // height: 150,
        text: "http://129.211.131.24:9900/?mac_mark=" + this.qr_code + "#/"
      });
    },
    getQrcode() {
      this.$nextTick(() => {
        this.qrcode();
      });
    },
    qrcode2() {
      let qrcode2 = new QRCode("qrcode2", {
        // width: 150,
        // height: 150,
        text: "http://129.211.131.24:8006/?mac_mark=" + this.qr_code2 + "#/"
      });
    },
    getQrcode2() {
      this.$nextTick(() => {
        this.qrcode2();
      });
    }
  }
};
</script>

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
  .show {
    width: 90%;
    height: 2rem;
    margin: 0 auto;
    margin-top: 5/@rem;
    span {
      float: left;
      font-size: 8/@rem;
      font-weight: 600;
      color: #fff;
    }
    #qrcode {
      float: left;
      margin: 0 auto;
      width: 50 / @rem;
      height: 50 / @rem;
      border: 4px solid #fff;
      margin-top: 0.3rem;
      /deep/img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .configuration {
    width: 90%;
    height: 2rem;
    margin: 0 auto;
    margin-top: -20/@rem;
    span {
      float: left;
      font-size: 8/@rem;
      font-weight: 600;
      color: #fff;
    }
    #qrcode2 {
      float: left;
      margin: 0 auto;
      width: 50 / @rem;
      height: 50 / @rem;
      border: 4px solid #fff;
      margin-top: 0.3rem;
      /deep/img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .save {
    position: relative;
    margin: 0 auto;
    width: 1.5rem;
    height: 0.6rem;
    margin-top: -20/@rem;
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