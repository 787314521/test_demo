<template>
  <div id="box">
    <!-- 顶部问题 -->
    <p>{{title}}</p>
    <!-- 单选题选择 -->
    <el-radio-group v-model="radio1" @change="changeValue">
      <el-radio v-model="radio1" label="1" class="el-radio1">{{one}}</el-radio>
      <el-radio v-model="radio1" label="2" class="el-radio2">{{two}}</el-radio>
      <el-radio v-model="radio1" label="3" class="el-radio3">{{three}}</el-radio>
    </el-radio-group>
    <!-- 返回上一页 -->
    <el-row>
      <el-button @click="v_click">返回上一页</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "你是否要求离婚损害赔偿？",
      radio1: "",
      one: "不要求",
      two:
        "因对方有如下行为（重婚，他人同居，实施家庭暴力/虐待遗弃家庭成员），要求赔偿",
      three: "因对方有其他行为要求赔偿",
      score: "",
      value: ""
    };
  },
  created(){
    this.value=parseInt(localStorage.getItem("key12"))
  },
  mounted() {
    console.log(this.score)
  },
  methods: {
    changeValue(e) {
      console.log(e)
      if (e == "1") {
        this.score = 2
      } else if (e == "2") {
        this.score = 2
      }else if (e == "3") {
        this.score = 4
      }
      this.score=this.score+this.value
      console.log(this.score)
      localStorage.setItem('key13',this.score)
      
      let _this=this
      setTimeout(function(){
        _this.$router.push({ path: "/hy_fourteen" });
      },300)
    },
    v_click() {
      localStorage.removeItem("key13")
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
}
#box p {
  font-size: 0.14rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  letter-spacing: 0.01rem;
}
#box .el-radio {
  position: absolute;
  left: 0;
  top: 0.4rem;
  width: 100%;
  height: 0.5rem;
  line-height: 0.55rem;
  margin-right: 0rem;
  border-radius: 0rem;
}
#box .el-radio.is-bordered + .el-radio.is-bordered {
  margin-left: 0rem;
}

#box .el-radio1 {
  border: 0.01rem solid rgb(219, 216, 216);
}
#box .el-radio2 {
  margin-top: 0.5rem;
  border: 0.01rem solid rgb(219, 216, 216);
  border-top: none;
  white-space: pre-wrap;
  line-height: 0.25rem;
  /* padding-top: 0.12rem; */
  text-align: left;
}
.el-radio3 {
  margin-top: 1rem;
  border: 0.01rem solid rgb(219, 216, 216);
  border-top: none;
}
#box .el-radio__input {
  font-size: 1.4rem;
}
#box .el-button {
  position: absolute;
  width: 2rem;
  left: 50%;
  top: 0.4rem;
  margin-left: -1rem;
  border-color: #409eff;
  color: #409eff;
  border-radius: 0.05rem;
}
/deep/ .el-radio__input {
  position: absolute;
  left: 0.1rem;
  top: 0.22rem;
  font-size: 0.14rem;
}
/deep/ .el-radio__label {
  position: absolute;
  left: 0.3rem;
  font-size: 0.14rem;
}
</style>