<template>
  <div class="box">
    <div class="top">
      <i class="el-icon-edit-outline"></i>填写诉讼费用计算信息：
    </div>
    <span class="leixing">案件类型：</span>
    <el-select v-model="value" placeholder="财产案件">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <div class="sheji">
      涉及财产：
      <el-radio-group v-model="radio" @change="change">
        <el-radio label="1">是</el-radio>
        <el-radio label="2">否</el-radio>
      </el-radio-group>
    </div>
    <div class="edu" v-if="flag">
      输入标的额：
      <el-input
        v-model="input0"
        placeholder="请输入金额"
        class="much"
        :disabled="edit"
        :views="jinyong()"
      ></el-input>
    </div>
    <el-row>
      <el-button type="primary" @click="jisuan">计算</el-button>
      <el-button type="primary" @click="chongzhi">重置</el-button>
    </el-row>
    <div class="jieguo">
      <i class="el-icon-edit-outline"></i>诉讼费用计算结果：
    </div>
    <div class="money">
      <div>
        受理费：
        <el-input v-model="input1" placeholder class="much"></el-input>&nbsp;&nbsp;元
      </div>
      <div>
        执行费：
        <el-input v-model="input2" placeholder class="much"></el-input>&nbsp;&nbsp;元
      </div>保全费：
      <el-input v-model="input3" placeholder class="much"></el-input>&nbsp;&nbsp;元
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "财产案件"
        },
        {
          value: "选项2",
          label: "普通非财产案件"
        },
        {
          value: "选项3",
          label: "离婚案件"
        },
        {
          value: "选项4",
          label: "人格权案件"
        },
        {
          value: "选项5",
          label: "知识产权案件"
        },
        {
          value: "选项6",
          label: "劳动争议案件"
        },
        {
          value: "选项7",
          label: "行政案件"
        },
        {
          value: "选项8",
          label: "商标、专利、海事行政案件"
        },
        {
          value: "选项9",
          label: "管辖权异议不成立案件"
        }
      ],
      value: "",
      radio: "2",
      input0: "",
      input1: "",
      input2: "",
      input3: "",
      flag: false,
      edit: false
    };
  },
  methods: {
    jinyong: function() {
      if (this.value == "选项1") {
        this.edit = false
      } else if (this.value == "选项2") {
        this.edit = true
        this.input0="不涉及财产"
      } else if (this.value == "选项3") {
        this.edit = false
      } else if (this.value == "选项4") {
        this.edit = false
      } else if (this.value == "选项5") {
        this.edit = false
      } else if (this.value == "选项6") {
        this.edit = true
        this.input0="不涉及财产"
      } else if (this.value == "选项7") {
        this.edit = true
        this.input0="不涉及财产"
      } else if (this.value == "选项8") {
        this.edit = true
        this.input0="不涉及财产"
      } else if (this.value == "选项9") {
        this.edit = true
        this.input0="不涉及财产"
      }
    },
    change() {
      if (this.radio == "1") {
        this.flag = true
        this.$options.methods.jisuan()
      } else {
        this.flag = false
      }
    },
    jisuan() {
      var num = parseInt(this.input0)
      if (this.value == "选项1") {
        this.input1 = "50-300"
        this.input2 = "50-500"
        this.input3 = "30"
        if (num < 10000) {
          this.input1 = 50 + ""
        } else if (num >= 10000 && num < 100000) {
          this.input1 = num * 0.025 - 200 + ""
        } else if (num >= 100000 && num < 200000) {
          this.input1 = num * 0.02 + 300 + ""
        } else if (num >= 200000 && num < 500000) {
          this.input1 = num * 0.015 + 1300 + ""
        } else if (num >= 500000 && num < 1000000) {
          this.input1 = num * 0.01 + 3800 + ""
        } else if (num >= 1000000 && num < 2000000) {
          this.input1 = num * 0.009 + 4800 + ""
        } else if (num >= 2000000 && num < 5000000) {
          this.input1 = num * 0.008 + 6800 + ""
        } else if (num >= 5000000 && num < 10000000) {
          this.input1 = num * 0.007 + 11800 + ""
        } else if (num >= 10000000 && num < 20000000) {
          this.input1 = num * 0.006 + 21800 + ""
        } else if (num >= 20000000) {
          this.input1 = num * 0.005 + 31800 + ""
        }
        if (num < 10000) {
          this.input2 = "50"
        } else if (num >= 10000 && num < 500000) {
          this.input2 = num * 0.015 - 100 + ""
        } else if (num >= 500000 && num < 5000000) {
          this.input2 = num * 0.01 + 2400 + ""
        } else if (num >= 5000000 && num < 10000000) {
          this.input2 = num * 0.005 + 27400 + ""
        } else if (num >= 10000000) {
          this.input2 = num * 0.001 + 67400 + ""
        }
        if (num < 1000) {
          this.input3 = "30"
        } else if (num >= 1000 && num < 100000) {
          this.input3 = num * 0.01 + ""
        } else if (num >= 100000) {
          this.input3 = num * 0.005 <= 5000 ? num * 0.005 + "" : 5000
        }
        if (this.flag == false) {
          this.input1 = "50-100"
          this.input2 = "50-500"
          this.input3 = "30"
        }
      } else if (this.value == "选项2") {
        this.input1 = "50-100";
        this.input2 = "50-500";
        this.input3 = "30";
      } else if (this.value == "选项3") {
        if (this.radio == "2") {
          this.input1 = "50-300";
          this.input2 = "50-500";
          this.input3 = "30";
        } else {
          if (num >= 200000) {
            this.input1 = num * 0.005 + "";
          }
          if (num < 10000) {
            this.input2 = "50";
          } else if (num >= 10000 && num < 500000) {
            this.input2 = num * 0.015 - 100 + "";
          } else if (num >= 500000 && num < 5000000) {
            this.input2 = num * 0.01 + 2400 + "";
          } else if (num >= 5000000 && num < 10000000) {
            this.input2 = num * 0.005 + 27400 + "";
          } else if (num >= 10000000) {
            this.input2 = num * 0.001 + 67400 + "";
          }
          if (num < 1000) {
            this.input3 = "30";
          } else if (num >= 1000 && num < 100000) {
            this.input3 = num * 0.01 + "";
          } else if (num >= 100000) {
            this.input3 = num * 0.005 <= 5000 ? num * 0.005 + "" : 5000;
          }
        }
      } else if (this.value == "选项4") {
        this.input1='100-500'
        if(num>50000&&num<100000){
          this.input1=num*0.01+''
        }else if(num>=100000){
          this.input1=num*0.005+''
        }
        if (num < 10000) {
          this.input2 = "50";
        } else if (num >= 10000 && num < 500000) {
          this.input2 = num * 0.015 - 100 + "";
        } else if (num >= 500000 && num < 5000000) {
          this.input2 = num * 0.01 + 2400 + "";
        } else if (num >= 5000000 && num < 10000000) {
          this.input2 = num * 0.005 + 27400 + "";
        } else if (num >= 10000000) {
          this.input2 = num * 0.001 + 67400 + "";
        }
        if (num < 1000) {
          this.input3 = "30";
        } else if (num >= 1000 && num < 100000) {
          this.input3 = num * 0.01 + "";
        } else if (num >= 100000) {
          this.input3 = num * 0.005 <= 5000 ? num * 0.005 + "" : 5000;
        }
        if (this.flag == false) {
          this.input1 = "50-100";
          this.input2 = "50-500";
          this.input3 = "30";
        }
      } else if (this.value == "选项5") {
        this.input1='500-1000'
        this.input2 = "50-500";
        this.input3 = "30";
        if (num < 10000) {
          this.input1 = 50 + "";
        } else if (num >= 10000 && num < 100000) {
          this.input1 = num * 0.025 - 200 + "";
        } else if (num >= 100000 && num < 200000) {
          this.input1 = num * 0.02 + 300 + "";
        } else if (num >= 200000 && num < 500000) {
          this.input1 = num * 0.015 + 1300 + "";
        } else if (num >= 500000 && num < 1000000) {
          this.input1 = num * 0.01 + 3800 + "";
        } else if (num >= 1000000 && num < 2000000) {
          this.input1 = num * 0.009 + 4800 + "";
        } else if (num >= 2000000 && num < 5000000) {
          this.input1 = num * 0.008 + 6800 + "";
        } else if (num >= 5000000 && num < 10000000) {
          this.input1 = num * 0.007 + 11800 + "";
        } else if (num >= 10000000 && num < 20000000) {
          this.input1 = num * 0.006 + 21800 + "";
        } else if (num >= 20000000) {
          this.input1 = num * 0.005 + 31800 + "";
        }
        if (num < 10000) {
          this.input2 = "50";
        } else if (num >= 10000 && num < 500000) {
          this.input2 = num * 0.015 - 100 + "";
        } else if (num >= 500000 && num < 5000000) {
          this.input2 = num * 0.01 + 2400 + "";
        } else if (num >= 5000000 && num < 10000000) {
          this.input2 = num * 0.005 + 27400 + "";
        } else if (num >= 10000000) {
          this.input2 = num * 0.001 + 67400 + "";
        }
        if (num < 1000) {
          this.input3 = "30";
        } else if (num >= 1000 && num < 100000) {
          this.input3 = num * 0.01 + "";
        } else if (num >= 100000) {
          this.input3 = num * 0.005 <= 5000 ? num * 0.005 + "" : 5000;
        }
        if (this.flag == false) {
          this.input1 = "500-1000";
          this.input2 = "50-500";
          this.input3 = "30";
        }
      }else if(this.value=="选项6"){
        this.input1="10"
        this.input2 = "50-500";
        this.input3 = "30";
      }else if(this.value=="选项7"){
        this.input1="50"
        this.input2 = "50-500"
        this.input3 = "30"
      }else if(this.value=="选项8"){
        this.input1="100"
        this.input2 = "50-500"
          this.input3 = "30"
      }else if(this.value=="选项9"){
        this.input1="50-100"
        this.input2 = "50-500"
          this.input3 = "30"
      }
    },
    chongzhi() {
      this.input0 = "";
      this.input1 = "";
      this.input2 = "";
      this.input3 = "";
    }
  }
};
</script>

<style scoped>
i {
  margin-bottom: 15px;
}
.el-icon-edit-outline {
  color: #1488f5;
  font-size: 28px;
}
.much {
  margin-bottom: 20px;
  width: 200px;
  height: 15px;
}
.leixing {
  margin-left: 149px;
  margin-bottom: 15px;
}
.sheji {
  margin-left: 42px;
  margin-top: 20px;
}
.jieguo {
  margin-left: -34px;
  margin-top: 15px;
  margin-bottom: -15px;
}
.money {
  margin-left: 148px;
  margin-top: 15px;
}
.el-row {
  margin-top: 20px;
}
.el-input {
  margin-top: 15px;
}
.el-input__inner {
  margin-bottom: 15px;
}
.el-button {
  margin-left: 155px;
}
.el-input__icon {
  height: 77%;
}
.edu {
  margin-left: 146px;
  /* display: none; */
}
</style>


