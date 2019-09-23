<template>
  <div class="box">
    <div class="word">
      <p class="English">Product Center</p>
      <p class="chinese">产品中心</p>
    </div>
    <ul class="product-image">
      <li class="use">
        <div class="useInfo">
          <div></div>
          <p class="chineseInfo">行业应用</p>
          <p class="EnglishInfo">Industry Application</p>
        </div>
      </li>
      <li class="terminal">
        <div class="terminalInfo">
          <div></div>
          <p class="chineseInfo">硬件终端</p>
          <p class="EnglishInfo">Hardware terminal</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
li {
  list-style: none;
}
.box {
  .word {
    margin: 0 auto;
    width: 300px;
    height: 72px;
    text-align: center;
    margin-top: 62px;
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
  .product-image {
    width: 100%;
    height: 520px;
    margin: 0 auto;
    margin-top: 40px;
    li {
      float: left;
      width: 900px;
      height: 520px;
      border-radius: 15px;
      margin-left: 35px;
    }
    .use,.terminal {
      background-image: url("../../static/images/newImages/行业应用.png");
      .useInfo,.terminalInfo {
        width: 900px;
        height: 520px;
        border-radius: 15px;
        background-color: rgba(0, 0, 0, 0.6);
        text-align: center;
        overflow: hidden;
        div {
          margin: 0 auto;
          margin-top: 125px;
          margin-bottom: 52px;
          width: 191px;
          height: 169px;
          
        }
       
        p {
          color: #fff;
          letter-spacing: 3px;
        }
        .chineseInfo {
          font-size: 20px;
          font-weight: 500;
        }
        .EnglishInfo {
          margin-top: 5px;
          font-size: 16px;
        }
      }
       .useInfo div{
            background-image: url("../../static/images/newImages/行业应用icon.png");
        }
        .terminalInfo div{
            background-image: url("../../static/images/newImages/硬件终端icon.png");
        }
    }
    .terminal {
      background-image: url("../../static/images/newImages/硬件终端.png");
    }
  }
}
</style>