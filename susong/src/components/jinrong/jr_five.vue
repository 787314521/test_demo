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
      title: "除了被告方的身份信息外，你还能提供哪些证据？",
      one:"借款合同原件、借据原件、本金及利息清单、有催收单且未超过三年",
      two:"物证、视听资料、电子数据等其他数据",
      three:"证人证言",
      four:"需要法院调取的其他证据",
      five:"没有以上证据",
      checkList: [],
      score: "",
      value: ""
    };
  },
  created(){
    this.value=parseInt(localStorage.getItem("key4"))
  },
  mounted() {
    console.log(this.score)
  },
  methods: {
    /* 复选框change时选项互斥 */
    change(val){
      console.log('val:',val)
      const isNoEvidence = val.some(v => v == 5)
      console.log('isNoEvidence:',isNoEvidence)
      if(isNoEvidence){
        this.checkList = ['5']
      }
    },
    v_click() {
      localStorage.removeItem("key5")
      this.$router.go(-1);
    },
    isOk() {
      if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("3") == -1 &&
        this.checkList.indexOf("4") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 4;
      } else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("3") == -1 &&
        this.checkList.indexOf("4") == -1 &&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 4;
      } else if (
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("4") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 5;
      } else if (
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("3") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 4;
      }else if (
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("3") == -1&&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 15;
      } 
      else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") == -1 &&
        this.checkList.indexOf("4") == -1 &&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 8;
      } else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("4") == -1 &&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 9;
      } else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("3") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 8;
      }else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("2") == -1 &&
        this.checkList.indexOf("3") == -1&&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 19;
      } 
      else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("4") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 9;
      } else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("3") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 8;
      }else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("3") == -1&&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 19;
      }
       else if (
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("2") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 9;
      }else if (
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("2") == -1&&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 20;
      } else if (
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("1") == -1 &&
        this.checkList.indexOf("2") == -1&&
        this.checkList.indexOf("3") == -1
      ) {
        this.score = 19;
      } 
      else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 13;
      } else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("3") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 12;
      }else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("3") == -1&&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 23;
      }else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("2") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 13;
      }else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("2") == -1&&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 24;
      }else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("2") == -1&&
        this.checkList.indexOf("3") == -1
      ) {
        this.score = 23;
      }else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("1") == -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 13;
      }else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("1") == -1&&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 24;
      }else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("1") == -1&&
        this.checkList.indexOf("3") == -1
      ) {
        this.score = 23;
      }else if (
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("5") != -1 &&
        this.checkList.indexOf("1") == -1&&
        this.checkList.indexOf("2") == -1
      ) {
        this.score = 24;
      }
      else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1&&
        this.checkList.indexOf("5") == -1
      ) {
        this.score = 17;
      } else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("5") != -1&&
        this.checkList.indexOf("3") == -1
      ) {
        this.score = 27;
      }else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("5") != -1&&
        this.checkList.indexOf("4") == -1
      ) {
        this.score = 28;
      }else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("5") != -1&&
        this.checkList.indexOf("2") == -1
      ) {
        this.score = 28;
      }else if (
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1 &&
        this.checkList.indexOf("5") != -1&&
        this.checkList.indexOf("1") == -1
      ) {
        this.score = 28;
      }else if (
        this.checkList.indexOf("1") != -1 &&
        this.checkList.indexOf("2") != -1 &&
        this.checkList.indexOf("3") != -1 &&
        this.checkList.indexOf("4") != -1&&
        this.checkList.indexOf("5") != -1
      ) {
        this.score = 32;
      }
      this.score = this.score + this.value;
      console.log(this.score);
      localStorage.setItem("key5", this.score);

      if (this.checkList != "") {
        this.$router.push({ path: "/jr_six" });
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
  top: 3.45rem;
  margin-left: -1rem;
  border-radius: 0.05rem;
}
#box .up_page {
  position: absolute;
  width: 2rem;
  left: 50%;
  top: 3.9rem;
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
  top: 0.1rem;
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
#box .one_box {
  position: absolute;
  border-top: 0.01rem solid rgb(219, 216, 216);
  white-space:pre-wrap;
  /* line-height: 0.2rem; */
  /* padding-top: 0.07rem; */
  text-align: left
}
#box .two_box {
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
  /* border-bottom: 0.01rem solid rgb(219, 216, 216); */
}
.four_box {
  position: absolute;
  top: 1.5rem;
  width: 100%;
  border-top: 0.01rem solid rgb(219, 216, 216);
  /* border-bottom: 0.01rem solid rgb(219, 216, 216); */
}
.five_box {
  position: absolute;
  top: 2rem;
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