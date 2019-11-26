<template>
  <div class="box">
    <p class="title">诉讼风险告知</p>
    <div class="dangerBox">
      <div class="left_title">风险指数</div>
      <div class="score">
        <div class="number">{{number}}</div>
        <div class="fen">分</div>
      </div>

      <div class="danger_type" ref="danger_type">{{danger}}</div>
      <div class="line">
        <div class="triangle" ref="triangle"></div>
        <div class="line_son line_one"></div>
        <div class="line_son line_two"></div>
        <div class="line_son line_three"></div>
        <div class="line_son line_four"></div>
      </div>
      <div class="grade grade_one">0</div>
      <div class="grade grade_two">25</div>
      <div class="grade grade_three">50</div>
      <div class="grade grade_four">75</div>
      <div class="grade grade_five">100</div>
      <hr />
      <div class="down">
        <span>风险指数说明：</span>
        <p
          class="content"
        >指数最高分为100分，数值越高说明风险越高，具体分为：重大风险（75-100）、中等风险（50-74）、一般风险（25-49）、较低风险（0-24）</p>
      </div>
    </div>
    <div class="word">
      <p class="title_min">一、风险方面</p>
      <p class="content">再审审理范围以原审范围为限，当事人超过原审范围增加或变更诉讼请求的都不属于再审范围。</p>
      <p class="content">通常情况下，当事人是不具有专业的法律素养以及出庭应诉的辩论能力和思维能力的，没有委托诉讼代理人，独自应对诉讼程序，只会导致其败诉的可能性增大。</p>
      <p class="content">由于你自身缺乏相应的法律知识，以及对庭审程序不了解，单独出庭会增加自身的诉讼风险。</p>
      <p
        class="content"
      >你和诉讼代理人都不按时出庭或者中途退庭，或经传票传唤，无正当理由拒不到庭，或者未经法庭许可中途退庭的，人民法院将按自动撤回起诉处理；被告反诉的，人民法院将对反诉的内容缺席审判，这不利于当事人诉求的实现。</p>
      <p
        class="content"
      >你不出庭可能会增加你的诉讼风险。诉讼代理人无法真正代替当事人的位置，当事人本人没有出庭，有些事实很难查清，会拖长审理期限。当事人本人不出庭的情况下，当事人的知情权受到影响，会弱化当事人对诉讼代理人的监督。如果委托代理人与当事人本人就案件事实向法庭所作陈述不一致的，以当事人本人的陈述为准。如没有特殊情况，建议你和委托代理人一起出庭。</p>
      <p
        class="content"
      >原始证据的证明力大于传来证据，直接证据的证明力大于间接证据的证明力。物证、书证、视听资料等证据的证明力要大于证人证言和当事人陈述，因为证人证言的主观性较强，容易携带当事人个人情感色彩，其证据可用性不高，因此当事人在提交证据时，要尽可能提交最能维护自身权益的客观证据材料。</p>
      <p class="content">当事人由于人身损害诉讼的需要，申请鉴定的，需要由鉴定人出庭出庭作证，否则单独的鉴定意见也不能作为定案依据。</p>
      <p class="content">不申请鉴定，可能造成人身伤害案件的相关事实得不到有效的验证。</p>
      <p class="content">当事人提出人身损害赔偿诉讼的目的只是为了获取相关不当利益，其诉求将得不到人民法院的认可，法院将对超出正常诉讼请求范围的诉求不予准许。</p>
      <p class="content">如果没有财产保全措施，对方有恶意转移财产、逃避债务等行为，可能导致胜诉后无财产可执行。</p>
      <p class="title_min">二、时间方面</p>
      <p
        class="content"
      >一审简易程序审理期限是三个月，本院院长批准可以延长，延长后的审理期限累计不得超过六个月。一审普通程序审理期限是从立案之日起六个月，经本院院长批准还可再申请延长六个月，如需再延长须报上级法院批准。因诉讼程序的进行会花费当事人相当一部分时间。</p>
      <p
        class="content"
      >二审判决的审理期限是自二审立案之日起三个月内审结，特殊情况需要延长的报本院院长批准。二审裁定的审理期限是自二审立案之日起30日内审结，特殊情况需要延长的，须报本院院长批准。因诉讼程序的进行会花费当事人相当一部分时间。</p>
      <p class="content">按哪个程序审理，就按哪个程序的审限，推迟了当事人诉求实现的时间。</p>
      <p class="content">因你不能提供被告的具体地址、电话等联系方式，如果找不到被告，可能至少需要公告送达两次，每次公告期限一般为60日。公告期限计入审判期限。</p>
      <p class="content">如果调解不成功，仍然走诉讼途径，那么立案、举证开庭、宣判等环节均需要您参加，需要付出一定的时间成本，可能还会造成一定的经济损失。</p>
      <p class="title_min">三、经济方面</p>
      <p class="content">一旦进入诉讼程序，当事人就会产生诉讼费用。</p>
      <p class="content">进入二审程序，当事人的诉讼费用会增加。</p>
      <p class="content">审限越长，当事人所负担的诉讼支出越多。</p>
      <p class="content">你可能要提前垫付证人出庭所产生的相关费用。</p>
      <p class="content">对于鉴定所产生的费用，可能由申请人先行承担。</p>
      <p class="content">如果调解不成功，仍然走诉讼途径，那么立案、举证开庭、宣判等环节均需要您参加，需要付出一定的时间成本，可能还会造成一定的经济损失。</p>
      <p class="title_min">四、感情方面</p>
      <p class="content">诉讼程序的启动，可能会损害双方当事人之间的友好关系</p>
      <p class="content">诉讼程序的启动会对其之后的合作关系造成影响，可能导致合作无法继续。</p>
      <p class="content">通过非诉纠纷解决途径（比如调解）进行纠纷解决，能让当事人今后能够有一个更和谐的工作、生活、学习环境。</p>
      <p class="content">诉讼难免影响感情，如果一纸判决下来，败诉方气没消，不主动履行应该履行的赔偿义务，法院再强制执行，恐怕当事人之间一生都会生分，弄不好还会激化矛盾。</p>
      <p class="title_min">五、信誉方面</p>
      <p
        class="content"
      >如果当事人存在虚假诉讼、恶意诉讼等违反法律法规、违背道德准则的行为，比如恶意串通，以诉讼损害第三人的权利的，不仅会对自身信誉造成损害，还有相应的处罚的风险。</p>
      <el-row>
        <el-button @click="v_click" class="return_home">返回首页</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "",
      danger: "",
      score: "",
      value: ""
    };
  },
  created() {
    this.score = parseInt(localStorage.getItem("key12"));
  },
  mounted() {
    console.log(this.score)
    if(this.score>=0&&this.score<25){
      this.$refs.triangle.style.left=this.score-3+"%"
      this.$refs.danger_type.style.right="149px"
      this.$refs.danger_type.style.backgroundColor="#64cd11"
      this.danger="较低风险"
      this.number=this.score
    }else if(this.score>=25&&this.score<=49){
      this.$refs.triangle.style.left=this.score-3+"%"
      this.$refs.danger_type.style.right="149px"
      this.$refs.danger_type.style.backgroundColor="#eee30d"
      this.danger="一般风险"
      this.number=this.score
    }else if(this.score>=50&&this.score<=74){
      this.$refs.triangle.style.left=this.score-3+"%"
      this.$refs.danger_type.style.right="90px"
      this.$refs.danger_type.style.backgroundColor="#ef9a09"
      this.danger="中等风险"
      this.number=this.score
    }else if(this.score>=75&&this.score<=100){
      this.$refs.triangle.style.left=this.score-3+"%"
      this.$refs.danger_type.style.right="32px"
      this.$refs.danger_type.style.backgroundColor="#eb1515"
      this.danger="重大风险"
      this.number=this.score
    }else if(this.score>100){
      this.$refs.triangle.style.left=96+"%"
      this.$refs.danger_type.style.right="32px"
      this.$refs.danger_type.style.backgroundColor="#eb1515"
      this.danger="重大风险"
      this.number=100
    }
  },
  methods: {
    v_click() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  .title {
    font-size: 20px;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .dangerBox {
    position: relative;
    width: 98%;
    height: 220px;
    margin: 0 auto;
    background-color: #e0f2fc;
    border: 1px solid #9dbfc9;
    .left_title {
      float: left;
      height: 90px;
      width: 20px;
      font-size: 16px;
      text-align: center;
      color: #fff;
      background-color: #70a9d4;
    }
    .danger_type {
      position: absolute;
      right: 32px;
      top: 5px;
      width: 120px;
      height: 30px;
      line-height: 30px;
      font-size: 24px;
      color: #fff;
      text-align: center;
      background-color: #f70629;
    }

    .score {
      position: absolute;
      left: 35px;
      width: 150px;
      height: 40px;
      .number {
        float: left;
        font-size: 30px;
        color: #f70629;
      }
      .fen {
        float: left;
        font-size: 24px;
        margin-top: 5px;
        color: #f70629;
      }
    }
    .line {
      position: relative;
      width: 80%;
      height: 12px;
      margin: 0 auto;
      margin-top: 60px;
      background-color: #ccc;
      .triangle {
        position: absolute;
        top: -20px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 17.3px 10px 0 10px;
        border-color: #f70629 transparent transparent transparent;
      }
      .line_son {
        float: left;
        width: 25%;
        height: 100%;
        border-radius: 2px;
      }
      .line_one {
        background-color: #64cd11;
      }
      .line_two {
        background-color: #eee30d;
      }
      .line_three {
        background-color: #ef9a09;
      }
      .line_four {
        background-color: #eb1515;
      }
    }
    .grade {
      position: absolute;
      top: 72px;
      font-size: 14px;
      color: #666;
    }
    .grade_one {
      left: 33px;
    }
    .grade_two {
      left: 102px;
    }
    .grade_three {
      left: 176px;
    }
    .grade_four {
      left: 250px;
    }
    .grade_five {
      left: 316px;
    }
    hr {
      width: 100%;
      height: 1px;
      background-color: #9dbfc9;
    }
    .down {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 127px;
      span {
        position: absolute;
        top: 10px;
        left: 20px;
        font-size: 18px;
        color: #6491b0;
        font-weight: 600;
      }
      .content {
        width: 90%;
        margin: 0 auto;
        margin-top: 35px;
        font-size: 14px;
        color: #6491b0;
        text-indent: 2em;
        line-height: 22px;
      }
    }
  }
  .word {
    width: 98%;
    margin: 0 auto;
    margin-top: 15px;
    .title_min {
      margin-top: 15px;
      margin-bottom: 15px;
      font-size: 16px;
    }
    .content {
      font-size: 14px;
      line-height: 26px;
      text-indent: 2em;
      color: #666;
      letter-spacing: 1px;
    }
  }
  .el-row {
    position: absolute;
    top: 2470px;
    left: 50%;
    margin-left: -75px;
  }
  .return_home {
    width: 150px;
    margin: 0 auto;
    border-color: #409eff;
    color: #409eff;
    border-radius: 0.05rem;
  }
}
</style>