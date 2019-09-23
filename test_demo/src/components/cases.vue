<template>
  <div class="box">
    <div class="word">
      <p class="English">Successful cases</p>
      <p class="chinese">成功案例</p>
    </div>
    <ul class="cases-image">
      <li
        v-for="item in info"
        :key="item.src"
        v-bind:style="{ 'background-image': 'url(' + item.src + ')','background-repeat':'no-repeat','background-size':'cover' }"
        @mouseenter.native="enterImage"
      >
        <div class="word-down" ref="wordDown">
          <div class="word-down-info">
            <p class="maxtitle">{{item.maxtitle}}</p>
            <p class="mintitle">{{item.mintitle}}</p>
          </div>
        </div>
        <div class="circle" ref="Circle">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </li>
    </ul>

    <!-- form -->
    <div class="contact">
      <div class="applyForm">
        <p>申请试用&nbsp;&nbsp;<span>APPLY&nbsp;FOR&nbsp;TRIAL</span></p>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="姓名" id="title">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="电话" id="title">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="公司/组织" id="title">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-form>
        <div class="nav-button">申请试用</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          src: "../../static/images/newImages/合肥新桥机场.png",
          maxtitle: "合肥新桥机场",
          mintitle: "合肥新桥机场选用亿迈杰数字标牌系统"
        },
        {
          src: "../../static/images/newImages/老乡鸡.png",
          maxtitle: "老乡鸡",
          mintitle: "老乡鸡选用亿迈杰零售电子餐牌系统"
        },
        {
          src: "../../static/images/newImages/万达.png",
          maxtitle: "万达广场",
          mintitle: "合肥包河万达广场选用亿迈杰信息发布系统"
        }
      ],
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  },
  methods: {
    enterImage() {
      //   this.$refs.wordDown.style.display=none;
    }
  }
};
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
  .cases-image {
    width: 100%;
    margin-top: 60px;
    :hover {
      .word-down {
        background-color: rgba(2, 159, 194, 0.7);
        .maxtitle {
          color: #fff;
        }
      }

      .circle {
        display: block;
      }
    }
    li {
      position: relative;
      float: left;
      width: 506px;
      height: 640px;
      margin-left: 80px;
      .circle {
        position: absolute;
        left: 50%;
        top: 195px;
        margin-left: -70px;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        background-color: rgba(2, 159, 194, 0.7);
        display: none;
        ul {
          margin-top: 60px;
          margin-left: 22px;
          li {
            float: left;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 3px solid #fff;
            margin-left: 10px;
            margin-right: 0px;
          }
        }
      }
      .word-down {
        position: relative;
        height: 130px;
        background-color: rgba(0, 0, 0, 0.7);
        margin-top: 510px;
        .word-down-info {
          position: absolute;
          left: 35px;
          top: 32px;
        }
        p {
          color: #fff;
        }
        .maxtitle {
          font-size: 16px;
          color: #05c4d8;
          letter-spacing: 3px;
        }
        .mintitle {
          font-size: 14px;
          margin-left: 0px;
          margin-top: 5px;
          letter-spacing: 2px;
        }
      }
    }
    :nth-child(2) {
      margin-left: 120px;
      margin-right: 40px;
    }
  }
  .contact {
    position: relative;
    width: 100%;
    height: 852px;
    background-image: url("../../static/images/Contact/bg.png");
    margin-top: 777px;
    .applyForm {
      position: absolute;
      left: 350px;
      top: 100px;
      width: 512px;
      height: 656px;
      background-image: url("../../static/images/Contact/contact_bg.png");
      p {
        margin-left: 78px;
        margin-top: 64px;
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
        span{
          font-size: 12px;
          letter-spacing: 2px;
        }
      }
      .el-form {
        margin-top: 60px;
        margin-left: 78px;
      }
      .nav-button {
        width: 125px;
        height: 36px;
        background-image: url("../../static/images/Header/nav_btn.png");
        font-size: 16px;
        color: #fff;
        text-align: center;
        line-height: 34px;
        margin: 0 auto;
        margin-top: 100px;
      }
    }
  }
}
</style>
<style>
#title .el-form-item__label {
  font-size: 14px;
  color: #fff;
  padding: 0;
}
#title .el-input__inner {
  width: 370px;
  height: 56px;
  background-image: url("../../static/images/Contact/login_input_def .png");
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 30px;
  color: #fff;
}
</style>