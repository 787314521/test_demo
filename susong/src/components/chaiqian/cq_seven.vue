<template>
  <div id="box">
      <!-- 顶部问题 -->
    <p>{{title}}</p>
    <!-- 单选题选择 -->
    <el-radio-group v-model="selectionsList[6].value" @change="changeValue">
      <el-radio v-model="radio1" label="1" class="el-radio1">{{one}}</el-radio>
      <el-radio v-model="radio1" label="2" class="el-radio2">{{two}}</el-radio>
    </el-radio-group>
    <!-- 返回上一页 -->
    <el-row>
      <el-button @click="v_click">返回上一页</el-button>
    </el-row>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      title: "对拆迁项目的补偿安置政策是否有了解？",
      radio1: "",
      one: "了解",
      two: "不了解",
      score: "",
      value: ""
    };
  },
  created(){
    this.value=parseInt(localStorage.getItem("key6"))
  },
  mounted() {
    console.log(this.score)
  },
  computed:{
    ...mapState({
      selectionsList: state => state.selectionsList
    })
  },
  methods: {
    changeValue(e){
      this.$store.commit('setSelections',{
        mark: 0,
        value: e
      })
      console.log(e)
      if (e == "1") {
        this.score = 1
      } else if (e == "2") {
        this.score = 6
      }
      this.score=this.score+this.value
      console.log(this.score)
      localStorage.setItem('key7',this.score)
      
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/cq_eight'})
      },300)
    },
    v_click(){
      localStorage.removeItem("key7")
      this.$router.go(-1)
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
  /* position: relative; */
}
.el-radio1 {
  border: 0.01rem solid rgb(219, 216, 216);
}
.el-radio2 {
  margin-top: 0.5rem;
  border: 0.01rem solid rgb(219, 216, 216);
  border-top: none;
}
.el-radio3 {
  margin-top: 1rem;
  border: 0.01rem solid rgb(219, 216, 216);
  border-top: none;
}
#box .el-radio__input {
  font-size: 1.4rem;
}
#box .el-button{
  position: absolute;
  width: 2rem;
  left: 50%;
  top: -0.1rem;
  margin-left: -1rem;
  border-color: #409EFF;
  color: #409EFF;
  border-radius: 0.05rem;
}
/deep/ .el-radio__input{
  position: absolute;
  left: 0.1rem;
  top: 0.22rem;
  font-size: 0.14rem;
}
/deep/ .el-radio__label{
  position: absolute;
  left: 0.3rem;
  font-size: 0.14rem;
}
</style>