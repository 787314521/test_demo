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
      title: "你知道债务人的哪些身份信息？",
      one:"知道债务人的地址",
      two:"知道债务人的电话、邮箱等通信方式",
      three:"通过相关途径能够联系到对方当事人",
      four:"对债务人的个人信息一无所知",
      checkList: [],
      score: "",
      value: ""
    };
  },
  created() {
    this.value = parseInt(localStorage.getItem("key3"));
  },
  mounted() {
    console.log(this.score);
  },
  methods: {
    /* 复选框change时选项互斥 */
    change(val){
      console.log('val:',val)
      const isNoEvidence = val.some(v => v == 4)
      console.log('isNoEvidence:',isNoEvidence)
      if(isNoEvidence){
        this.checkList = ['4']
      }
    },
    isOk() {
      if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("3") == -1 &&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 2;
      } else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("3") == -1 &&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 2;
      } else if (
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 5;
      } else if (
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("3") == -1
      ) {
        this.score = 10;
      } else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") == -1 &&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 4;
      } else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 7;
      } else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("3") == -1
      ) {
        this.score = 12;
      } else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 7;
      } else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("3") == -1
      ) {
        this.score = 12;
      } else if (
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("2") == -1
      ) {
        this.score = 15;
      } else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 9;
      } else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("3") == -1
      ) {
        this.score = 14;
      }
      else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("2") == -1
      ) {
        this.score = 17;
      } else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("1") == -1
      ) {
        this.score = 17;
      }
      else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("1") != -1
      ) {
        this.score = 19;
      }
      this.score = this.score + this.value;
      console.log(this.score);
      localStorage.setItem("key4", this.score);

      if (this.checkList != "") {
        this.$router.push({ path: "/jd_five" });
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
      localStorage.removeItem("key4")
      this.$router.go(-1);
    },
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
  top: 2.8rem;
  margin-left: -1rem;
  border-radius: 0.05rem;
}
#box .up_page {
  position: absolute;
  width: 2rem;
  left: 50%;
  top: 3.25rem;
  margin-left: -1rem;
  border-color: #409eff;
  color: #409eff;
  border-radius: 0.05rem;
}
.el-checkbox-group {
  display: flex;
}
#box .el-checkbox {
  /* position: absolute;
  left: 0;
  top: 0.7rem; */
  margin-top: 0.7rem;
  /* border: 0.01rem solid rgb(219, 216, 216); */
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
.one_box {
  position: absolute;
  border-top: 0.01rem solid rgb(219, 216, 216);
}
.two_box {
  position: absolute;
  top: 0.5rem;
  width: 100%;
  border-top: 0.01rem solid rgb(219, 216, 216);
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
  border-bottom: 0.01rem solid rgb(219, 216, 216);
}
</style>
<style>
.alert_test {
  width: 70%;
}
</style>