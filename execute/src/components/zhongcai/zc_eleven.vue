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
      <el-checkbox label="7" class="seven_box">{{seven}}</el-checkbox>
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
      title: "您对被执行人的财产是否有抵押权、质押权、留置权、工程款优先受偿权等优先权或者诉讼保全",
      one: "有抵押(或质押）并且已经办理了登记",
      two:
        "有抵押(或质押），但未办理登记",
      three: "有留置权",
      four: "有工程款优先受偿权",
      five:
        "有其他优先权",
      six: "有诉讼保全",
      seven:"以上都没有",
      checkList: [],
      value: 0,
      score1: "",
      score2: "",
      score3: "",
      score4: "",
      score5: "",
      score6: "",
      score7: "",
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
          Number(this.score6) +
          Number(this.score7) || ""
      );
    }
  },
  created() {
    this.value = parseInt(localStorage.getItem("key10"))
  },
  mounted() {
    console.log(this.score);
  },
  methods: {
    /* 复选框change时选项互斥 */
    change(e) {
      console.log('e:',e)
      const isNoEvidence = e.some(v => v == 7)
      console.log('isNoEvidence:',isNoEvidence)
      if(isNoEvidence){
        this.checkList = ['7']
      }
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
        this.score2 = 1;
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
      if (e.includes("7")) {
        this.score6 = 1;
      } else {
        this.score6 = 0;
      }
    },
    isOk() {
      // this.score = this.value + this.score
      console.log(this.value+this.score);
      localStorage.setItem("key11", this.value+this.score);

      if (this.checkList != "") {
        this.$router.push({ path: "/zc_twelve" })
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
      localStorage.removeItem("key11");
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
  left: 0.1rem;
  font-size: 0.14rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  letter-spacing: 0.01rem;
  color: rgb(170, 168, 168);
}
#box p {
  position: absolute;
  left: 0.6rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  display: inline-block;
  font-size: 0.14rem;
  margin-top: 0.2rem;
  margin-bottom: 0.4rem;
  /* margin-left: -0.25rem; */
  letter-spacing: 0.01rem;
}
#box .yes {
  position: absolute;
  width: 2rem;
  left: 50%;
  top: 4.5rem;
  margin-left: -1rem;
  border-radius: 0.05rem;
}
#box .up_page {
  position: absolute;
  width: 2rem;
  left: 50%;
  top: 4.95rem;
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
  top: 0.17rem;
}
/deep/ .three_box .el-checkbox__label {
  top: 0.17rem;
}
/deep/ .four_box .el-checkbox__label {
  top: 0.17rem;
}
/deep/ .five_box .el-checkbox__label {
  top: 0.17rem;
}
.one_box {
  position: absolute;
  border-top: 0.01rem solid rgb(219, 216, 216);
  top: 0.2rem;
}
.two_box {
  position: absolute;
  top: 0.7rem;
  width: 100%;
  border-top: 0.01rem solid rgb(219, 216, 216);
  white-space: pre-wrap;
  line-height: 0.2rem;
  text-align: left;
}
.three_box {
  position: absolute;
  top: 1.2rem;
  width: 100%;
  border-top: 0.01rem solid rgb(219, 216, 216);
  white-space: pre-wrap;
  line-height: 0.2rem;
  text-align: left;
}
.four_box {
  position: absolute;
  top: 1.7rem;
  width: 100%;
  border-top: 0.01rem solid rgb(219, 216, 216);
  /* border-bottom: 0.01rem solid rgb(219, 216, 216); */
  white-space: pre-wrap;
  line-height: 0.2rem;
  text-align: left;
}
.five_box {
  position: absolute;
  top: 2.2rem;
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
  top: 2.7rem;
  width: 100%;
  border-top: 0.01rem solid rgb(219, 216, 216);
  border-bottom: 0.01rem solid rgb(219, 216, 216);
}
.seven_box {
  position: absolute;
  top: 3.2rem;
  width: 100%;
  border-bottom: 0.01rem solid rgb(219, 216, 216);
}
</style>
<style>
.alert_test {
  width: 70%;
}
</style>