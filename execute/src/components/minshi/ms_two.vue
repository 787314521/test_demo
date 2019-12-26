<template>
  <div id="box">
    <!-- 顶部问题 -->
    <div class="top">
      <span class="more">（多选）</span>
      <p>{{title}}</p>
    </div>
    <!-- 多选题选择 -->
    <el-checkbox-group v-model="checkList" @change="change">
      <el-checkbox label="1" class="one_box">{{one}}</el-checkbox>
      <el-checkbox label="2" class="two_box">{{two}}</el-checkbox>
      <el-checkbox label="3" class="three_box">{{three}}</el-checkbox>
      <el-checkbox label="4" class="four_box">{{four}}</el-checkbox>
      <el-checkbox label="5" class="five_box">{{five}}</el-checkbox>
      <el-checkbox label="6" class="six_box">{{six}}</el-checkbox>
    </el-checkbox-group>
    <!-- 返回上一页 -->
    <el-row>
      <el-button type="primary" class="yes" @click="isOk">确定</el-button>
      <el-button @click="v_click" class="up_page">返回上一页</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "您能够提交以下哪些文件和证件",
      one: "申请执行书",
      two:
        "生效法律文书副本（民事判决书、行政判决书、裁定书、调解书、支付令等）",
      three: "生效裁判证明书",
      four: "申请执行人的身份证明（身份证、营业执照、法定代表人身份证明）",
      five:
        "我是生效法律文书确定的权利人的继承人或权利承受人，能提交继承或者承受权利的证明文件",
      six: "其他应当提交的文件或证件",
      checkList: [],
      value: "",
      score1: "",
      score2: "",
      score3: "",
      score4: "",
      score5: "",
      score6: ""
    };
  },
  computed: {
    score() {
      return (
        Number(this.score1) +
          Number(this.score2) +
          Number(this.score3) +
          Number(this.score4) +
          Number(this.score5) +
          Number(this.score6) || ""
      );
    }
  },
  created() {
    this.value = parseInt(localStorage.getItem("key1"))
  },
  mounted() {
    console.log(this.score);
  },
  methods: {
    /* 复选框change时选项互斥 */
    change(e) {
      // console.log('val:',val)
      // const isNoEvidence = val.some(v => v == 5)
      // console.log('isNoEvidence:',isNoEvidence)
      // if(isNoEvidence){
      //   this.checkList = ['5']
      // }
      if (e.includes("1")) {
        this.score1 = -1;
      } else {
        this.score1 = 0;
      }
      if (
        e.includes(
          "2"
        )
      ) {
        this.score2 = -2;
      } else {
        this.score2 = 0;
      }
      if (e.includes("3")) {
        this.score3 = -1;
      } else {
        this.score3 = 0;
      }
      if (
        e.includes(
          "4"
        )
      ) {
        this.score4 = -1;
      } else {
        this.score4 = 0;
      }
      if (
        e.includes(
          "5"
        )
      ) {
        this.score5 = -1;
      } else {
        this.score5 = 0;
      }
      if (e.includes("6")) {
        this.score6 = -1;
      } else {
        this.score6 = 0;
      }
    },
    isOk() {
      // this.score = this.value + this.score
      console.log(this.value+this.score);
      localStorage.setItem("key2", this.value+this.score);

      if (this.checkList != "") {
        this.$router.push({ path: "/ms_three" })
      } else {
        this.$alert("请选择选项！", "提示", {
          confirmButtonText: "确定",
          customClass: "alert_test"
          //   callback: action => {
          //     this.$message({
          //       type: "info",
          //       message: `action: ${action}`
          //     });
          //   }
        });
      }
    },
    v_click() {
      localStorage.removeItem("key2");
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
#box {
  position: relative;
  /* width: 100%; */
  text-align: center;
  /* padding-top: 0.2rem; */
}
#box .top {
  width: 100%;
}
#box .more {
  position: absolute;
  left: 0.3rem;
  font-size: 0.14rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  letter-spacing: 0.01rem;
  color: rgb(170, 168, 168);
}
#box p {
  position: absolute;
  left: 0.8rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  display: inline-block;
  font-size: 0.14rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  /* margin-left: -0.25rem; */
  letter-spacing: 0.01rem;
}
#box .yes {
  position: absolute;
  width: 2rem;
  left: 50%;
  top: 3.8rem;
  margin-left: -1rem;
  border-radius: 0.05rem;
}
#box .up_page {
  position: absolute;
  width: 2rem;
  left: 50%;
  top: 4.25rem;
  margin-left: -1rem;
  border-color: #409eff;
  color: #409eff;
  border-radius: 0.05rem;
}
.el-checkbox-group {
  display: flex;
}
#box .el-checkbox {
  display: block;
  margin-top: 0.7rem;
  width: 100%;
  height: 0.5rem;
  line-height: 0.4rem;
  margin-right: 0rem;
  border-radius: 0rem;
  flex-wrap: wrap;
}
/deep/ .el-checkbox__input {
  position: absolute;
  left: 0.1rem;
  top: 0.2rem;
  font-size: 0.14rem;
}
/deep/ .el-checkbox__label {
  position: absolute;
  left: 0.2rem;
  top: 0.17rem;
  font-size: 0.14rem;
}
/deep/ .two_box .el-checkbox__label {
  top: 0.07rem;
}
/deep/ .four_box .el-checkbox__label {
  top: 0.07rem;
}
/deep/ .five_box .el-checkbox__label {
  top: 0rem;
}
.one_box {
  position: absolute;
  border-top: 0.01rem solid rgb(219, 216, 216);
}
.two_box {
  position: absolute;
  top: 0.5rem;
  width: 100%;
  border-top: 0.01rem solid rgb(219, 216, 216);
  white-space: pre-wrap;
  line-height: 0.2rem;
  text-align: left;
}
.three_box {
  position: absolute;
  top: 1rem;
  width: 100%;
  border-top: 0.01rem solid rgb(219, 216, 216);
}
.four_box {
  position: absolute;
  top: 1.5rem;
  width: 100%;
  border-top: 0.01rem solid rgb(219, 216, 216);
  /* border-bottom: 0.01rem solid rgb(219, 216, 216); */
  white-space: pre-wrap;
  line-height: 0.2rem;
  text-align: left;
}
.five_box {
  position: absolute;
  top: 2rem;
  width: 100%;
  height: 0.6rem;
  border-top: 0.01rem solid rgb(219, 216, 216);
  /* border-bottom: 0.01rem solid rgb(219, 216, 216); */
  white-space: pre-wrap;
  /* line-height: 0.2rem; */
  text-align: left;
}
.six_box {
  position: absolute;
  top: 2.5rem;
  width: 100%;
  border-top: 0.01rem solid rgb(219, 216, 216);
  border-bottom: 0.01rem solid rgb(219, 216, 216);
}
</style>
<style>
.alert_test {
  width: 70%;
}
</style>