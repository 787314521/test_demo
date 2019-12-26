<template>
  <div id="box">
    <!-- 顶部问题 -->
    <p>{{title}}</p>
    <!-- 单选题选择 -->
    <el-radio-group v-model="selectionsList[3].value" @change="changeValue" @click.native="s_click">
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
let timer = null;
import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "您申请执行所依据的公证债权文书符合以下哪个时效范围",
      radio1: "",
      one: "公证债权文书规定履行期间的最后一日起两年内",
      two: "公证债权文书规定履行期间的最后一日起，已超过两年",
      score: 0,
      value: ""
    };
  },
  created() {
    this.value = parseInt(localStorage.getItem("key3"));
  },
  mounted() {
    console.log(this.score);
  },
  computed: {
    ...mapState({
      selectionsList: state => state.selectionsList
    })
  },
  methods: {
    changeValue(e) {
      this.$store.commit("setSelections", {
        mark: 3,
        value: e
      });
      console.log(e);
      if (e == "1") {
        this.score = this.score - 1;
      } else if (e == "2") {
        this.score = this.score + 1;
      }
      console.log(this.score + this.value);
      localStorage.setItem("key4", this.score + this.value);

      let _this = this;
      clearTimeout(timer);
      timer = setTimeout(function() {
        _this.$router.push({ path: "/gz_five" });
      }, 300);
    },
    s_click() {
      let _this = this;
      clearTimeout(timer);
      timer = setTimeout(function() {
        _this.$router.push({ path: "/gz_five" });
      }, 300);
    },
    v_click() {
      localStorage.removeItem("key4");
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
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
#box .el-radio {
  position: absolute;
  left: 0;
  top: 0.4rem;
  width: 100%;
  height: 0.5rem;
  /* line-height: 0.55rem; */
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
  margin-top: 0.2rem;
  white-space: pre-wrap;
  line-height: 0.2rem;
  text-align: left;
}
.el-radio2 {
  margin-top: 0.72rem;
  border: 0.01rem solid rgb(219, 216, 216);
  border-top: none;
  white-space: pre-wrap;
  line-height: 0.2rem;
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
  /* top: 0.4rem; */
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
  top: 0.2rem;
  font-size: 0.14rem;
}
/deep/ .el-radio2 .el-radio__label {
  top: 0.1rem;
}
/deep/ .el-radio1 .el-radio__label {
  top: 0.1rem;
}
</style>