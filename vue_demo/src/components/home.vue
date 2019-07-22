<template>
  <div class="box">
    <div class="top">
      <i class="el-icon-edit-outline"></i>填写诉讼费用计算信息：
    </div>
    <span class="leixing">案件类型：</span>
    <el-select v-model="value" placeholder="财产案件">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <div class="edu">请输入标的额：<el-input v-model="input0" placeholder class="much"></el-input></div>
    <br />
    <span class="sheji">涉及财产：</span>
    <el-radio v-model="radio" label="1">是</el-radio>
    <el-radio v-model="radio" label="2">否</el-radio>
    <el-row>
      <el-button type="primary" @click='jisuan'>计算</el-button>
      <el-button type="primary" @click='chongzhi'>重置</el-button>
    </el-row>
    <div class="jieguo">
      <i class="el-icon-edit-outline"></i>诉讼费用计算结果：
    </div>
    <div class="money">
      <div>受理费：
      <el-input v-model="input1" placeholder class="much"></el-input>&nbsp;&nbsp;元</div>
      <div>执行费：
      <el-input v-model="input2" placeholder class="much"></el-input>&nbsp;&nbsp;元</div>
      保全费：
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
          label: "非财产案件"
        },
        {
          value: "选项3",
          label: "其他类型案件"
        },
        {
          value: "选项4",
          label: "执行案件"
        },
        {
          value: "选项5",
          label: "诉讼保全"
        }
      ],
      value: "",
      radio: "2",
      input0:'',
      input1: '',
      input2: '',
      input3: ''
    };
  },
  methods:{
    jisuan:function(){
      var num=parseInt(this.input0)
      if(this.value=='选项1'){
        if(num<10000){
          this.input1=50+''
          this.input2=50+''
          this.input3=30+''
        }else if(num>=10000&&num<100000){
          this.input1=num*0.025-200+''
          this.input2=150+''
          this.input3=130+''
        }else if(num>=100000&&num<200000){
          this.input1=num*0.02+300+''
          this.input2=250+''
          this.input3=230+''
        }else if(num>=200000&&num<500000){
          this.input1=num*0.015+1300+''
          this.input2=350+''
          this.input3=330+''
        }else if(num>=500000&&num<1000000){
          this.input1=num*0.01+3800+''
          this.input2=450+''
          this.input3=430+''
        }else if(num>=1000000&&num<2000000){
          this.input1=num*0.009+4800+''
          this.input2=650+''
          this.input3=630+''
        }else if(num>=2000000&&num<5000000){
          this.input1=num*0.008+6800+''
          this.input2=850+''
          this.input3=830+''
        }else if(num>=5000000&&num<10000000){
          this.input1=num*0.007+11800+''
          this.input2=1050+''
          this.input3=1030+''
        }else if(num>=10000000&&num<20000000){
          this.input1=num*0.006+21800+''
          this.input2=2050+''
          this.input3=2030+''
        }else if(num>=20000000){
          this.input1=num*0.005+31800+''
          this.input2=4050+''
          this.input3=4030+''
        }
      }else if(this.value=='选项2'){
        if(num<10000){
          this.input1=50+''
          this.input2=50+''
          this.input3=30+''
        }else if(num>=10000&&num<100000){
          this.input1=num*0.025-200+''
          this.input2=150+''
          this.input3=130+''
        }else if(num>=100000&&num<200000){
          this.input1=num*0.02+300+''
          this.input2=250+''
          this.input3=230+''
        }else if(num>=200000&&num<500000){
          this.input1=num*0.015+1300+''
          this.input2=350+''
          this.input3=330+''
        }else if(num>=500000&&num<1000000){
          this.input1=num*0.01+3800+''
          this.input2=450+''
          this.input3=430+''
        }else if(num>=1000000&&num<2000000){
          this.input1=num*0.009+4800+''
          this.input2=650+''
          this.input3=630+''
        }else if(num>=2000000&&num<5000000){
          this.input1=num*0.008+6800+''
          this.input2=850+''
          this.input3=830+''
        }else if(num>=5000000&&num<10000000){
          this.input1=num*0.007+11800+''
          this.input2=1050+''
          this.input3=1030+''
        }else if(num>=10000000&&num<20000000){
          this.input1=num*0.006+21800+''
          this.input2=2050+''
          this.input3=2030+''
        }else if(num>=20000000){
          this.input1=num*0.005+31800+''
          this.input2=4050+''
          this.input3=4030+''
        }
      }else if(this.value=='选项3'){
        if(num<10000){
          this.input1=50+''
          this.input2=50+''
          this.input3=30+''
        }else if(num>=10000&&num<100000){
          this.input1=num*0.025-200+''
          this.input2=150+''
          this.input3=130+''
        }else if(num>=100000&&num<200000){
          this.input1=num*0.02+300+''
          this.input2=250+''
          this.input3=230+''
        }else if(num>=200000&&num<500000){
          this.input1=num*0.015+1300+''
          this.input2=350+''
          this.input3=330+''
        }else if(num>=500000&&num<1000000){
          this.input1=num*0.01+3800+''
          this.input2=450+''
          this.input3=430+''
        }else if(num>=1000000&&num<2000000){
          this.input1=num*0.009+4800+''
          this.input2=650+''
          this.input3=630+''
        }else if(num>=2000000&&num<5000000){
          this.input1=num*0.008+6800+''
          this.input2=850+''
          this.input3=830+''
        }else if(num>=5000000&&num<10000000){
          this.input1=num*0.007+11800+''
          this.input2=1050+''
          this.input3=1030+''
        }else if(num>=10000000&&num<20000000){
          this.input1=num*0.006+21800+''
          this.input2=2050+''
          this.input3=2030+''
        }else if(num>=20000000){
          this.input1=num*0.005+31800+''
          this.input2=4050+''
          this.input3=4030+''
        }
      }else if(this.value=='选项4'){
        if(num<10000){
          this.input1=50+''
          this.input2=50+''
          this.input3=30+''
        }else if(num>=10000&&num<100000){
          this.input1=num*0.025-200+''
          this.input2=150+''
          this.input3=130+''
        }else if(num>=100000&&num<200000){
          this.input1=num*0.02+300+''
          this.input2=250+''
          this.input3=230+''
        }else if(num>=200000&&num<500000){
          this.input1=num*0.015+1300+''
          this.input2=350+''
          this.input3=330+''
        }else if(num>=500000&&num<1000000){
          this.input1=num*0.01+3800+''
          this.input2=450+''
          this.input3=430+''
        }else if(num>=1000000&&num<2000000){
          this.input1=num*0.009+4800+''
          this.input2=650+''
          this.input3=630+''
        }else if(num>=2000000&&num<5000000){
          this.input1=num*0.008+6800+''
          this.input2=850+''
          this.input3=830+''
        }else if(num>=5000000&&num<10000000){
          this.input1=num*0.007+11800+''
          this.input2=1050+''
          this.input3=1030+''
        }else if(num>=10000000&&num<20000000){
          this.input1=num*0.006+21800+''
          this.input2=2050+''
          this.input3=2030+''
        }else if(num>=20000000){
          this.input1=num*0.005+31800+''
          this.input2=4050+''
          this.input3=4030+''
        }
      }else if(this.value=='选项5'){
        if(num<10000){
          this.input1=50+''
          this.input2=50+''
          this.input3=30+''
        }else if(num>=10000&&num<100000){
          this.input1=num*0.025-200+''
          this.input2=150+''
          this.input3=130+''
        }else if(num>=100000&&num<200000){
          this.input1=num*0.02+300+''
          this.input2=250+''
          this.input3=230+''
        }else if(num>=200000&&num<500000){
          this.input1=num*0.015+1300+''
          this.input2=350+''
          this.input3=330+''
        }else if(num>=500000&&num<1000000){
          this.input1=num*0.01+3800+''
          this.input2=450+''
          this.input3=430+''
        }else if(num>=1000000&&num<2000000){
          this.input1=num*0.009+4800+''
          this.input2=650+''
          this.input3=630+''
        }else if(num>=2000000&&num<5000000){
          this.input1=num*0.008+6800+''
          this.input2=850+''
          this.input3=830+''
        }else if(num>=5000000&&num<10000000){
          this.input1=num*0.007+11800+''
          this.input2=1050+''
          this.input3=1030+''
        }else if(num>=10000000&&num<20000000){
          this.input1=num*0.006+21800+''
          this.input2=2050+''
          this.input3=2030+''
        }else if(num>=20000000){
          this.input1=num*0.005+31800+''
          this.input2=4050+''
          this.input3=4030+''
        }
      }
    },
    chongzhi(){
      this.input0=''
      this.input1=''
      this.input2=''
      this.input3=''
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
  margin-left: 70px;
  margin-top: 15px;
}
.jieguo {
  margin-left: -34px;
  margin-top: 15px;
  margin-bottom: -15px;
}
.money{
  margin-left: 148px;
  margin-top: 15px;
}
.el-row{
  margin-top: 20px;
}
.el-input{
  margin-top: 15px;
}
.el-input__inner{
  margin-bottom: 15px;
}
.el-button{
  margin-left: 155px;
}
.el-input__icon{
  height: 77%;
}
.edu{
  margin-left: 154px;
}
</style>


