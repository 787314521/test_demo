<template>
  <div class="box">
    <span class="info">诉讼标的</span>
    <i>（请输入您的诉讼标的额）</i>
    <div class="box_up">
      <el-input v-model="count" placeholder class="much" clearable></el-input>
      <span class="yuan">元</span>
    </div>
    <span class="money">诉讼费用</span>
    <div class="box_down">
      <el-input v-model="result" placeholder class="much"></el-input>
      <span class="yuan">元</span>
    </div>
    <div class="word">
      <p>除诉讼费用外，还有其他的杂费</p>
      <p>例如：多次往返的交通费，请假扣除的工资等</p>
      <p>如果选择调解解决则无上诉费用</p>
    </div>
    <el-row>
      <el-button type="primary" class="post" @click="isOk">提交</el-button>
      <el-button @click="v_click" class="up_page">返回上一页</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: "",
      result: "",
      score: "",
      value: ""
    };
  },
  created(){
    this.score=parseInt(localStorage.getItem("key12"))
  },
  mounted() {
    console.log(this.score)
  },
  watch: {
    count(val) {
      var num = parseInt(this.count);
      if (num < 10000) {
        this.result = 50 + "";
      } else if (num >= 10000 && num < 100000) {
        this.result = num * 0.025 - 200 + "";
      } else if (num >= 100000 && num < 200000) {
        this.result = num * 0.02 + 300 + "";
      } else if (num >= 200000 && num < 500000) {
        this.result = num * 0.015 + 1300 + "";
      } else if (num >= 500000 && num < 1000000) {
        this.result = num * 0.01 + 3800 + "";
      } else if (num >= 1000000 && num < 2000000) {
        this.result = num * 0.009 + 4800 + "";
      } else if (num >= 2000000 && num < 5000000) {
        this.result = num * 0.008 + 6800 + "";
      } else if (num >= 5000000 && num < 10000000) {
        this.result = num * 0.007 + 11800 + "";
      } else if (num >= 10000000 && num < 20000000) {
        this.result = num * 0.006 + 21800 + "";
      } else if (num >= 20000000) {
        this.result = num * 0.005 + 41800 + "";
      } else if (this.count=="") {
        this.result = "";
      }
    }
  },
  methods: {
    isOk() {
      console.log(this.score)
      localStorage.setItem('key13',this.score)
      
      if (this.checkList != "") {
        this.$router.push({ path: "/hb_fourteen" });
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
      localStorage.removeItem("key13")
      this.$router.go(-1);
    },
  }
};
</script>

<style scoped>
.box {
  position: relative;
  padding: 0.1rem;
}
.box_up {
  position: absolute;
  top: -0.4rem;
  left: 0.1rem;
  width: 94%;
}
.box .info {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  font-size: 0.14rem;
}
.box i {
  position: absolute;
  top: 0.1rem;
  left: 0.7rem;
  font-size: 0.14rem;
  color: rgb(170, 167, 167);
  font-style: normal;
}
.money,
.yuan {
  font-size: 0.14rem;
}
.money {
  position: absolute;
  left: 0.1rem;
  top: 0.9rem;
}
.much {
  width: 80%;
  z-index: 999;
}
.box_down {
  position: absolute;
  left: 0.1rem;
  top: 0.4rem;
  width: 94%;
}
.word {
  position: absolute;
  left: 0.1rem;
  top: 1.7rem;
  line-height: 0.17rem;
}
.word p {
  font-size: 0.12rem;
  color: rgb(170, 167, 167);
}
.box .post {
  position: absolute;
  width: 45%;
  /* left: 0.1rem; */
  top: 2.3rem;
  border-radius: 0.05rem;
}
.box .up_page {
  position: absolute;
  width: 45%;
  left: 50%;
  top: 2.3rem;
  border-color: #409eff;
  color: #409eff;
  border-radius: 0.05rem;
}
</style>