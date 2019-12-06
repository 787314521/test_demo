<template>
  <div id="box">
    <!-- 顶部问题 -->
    <p>{{title}}</p>
    <!-- 单选题选择 -->
    <el-radio-group v-model="selectionsList[8].value" @change="changeValue">
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
import {mapState} from 'vuex'
export default {
  data() {
    return {
      title: "是否存在抵押、质押担保？",
      radio1: "",
      one: "有抵押、质押担保，且已经办理了登记或已取得质物",
      two: "有抵押或质押担保，但未办理登记或质物已不存在",
      three: "没有抵押、质押担保",
      score: "",
      value: ""
    };
  },
  created(){
    this.value=parseInt(localStorage.getItem("key8"))
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
        this.score = 2
      } else if (e == "2") {
        this.score = 6
      }else if (e == "2") {
        this.score = 9
      }
      this.score=this.score+this.value
      console.log(this.score)
      localStorage.setItem('key9',this.score)
      
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/jr_ten'})
      },300)
    },
    v_click(){
      localStorage.removeItem("key9")
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
#box .el-radio1 {
  border: 0.01rem solid rgb(219, 216, 216);
  white-space:pre-wrap;
  line-height: 0.25rem;
  /* padding-top: 0.07rem; */
  text-align: left
}
#box .el-radio2 {
  margin-top: 0.5rem;
  border: 0.01rem solid rgb(219, 216, 216);
  border-top: none;
  white-space:pre-wrap;
  line-height: 0.25rem;
  /* padding-top: 0.07rem; */
  text-align: left
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
  top: 0.4rem;
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