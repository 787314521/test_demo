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
      <p class="title_min">小建议：</p>
      <p class="title_min">一、你选择的基本案情</p>
      <p class="content">根据你所选择的基本案情信息，你还没有当地民政、劳动保障等部门的困难证明，建议你先向当地民政、劳动保障等部门的困难标准证明。</p>
      <p class="title_min">二、能不能申请减免缓诉讼费用</p>
      <p class="content">（一）诉讼费用的规定</p>
      <p
        class="content"
      >根据《中华人民共和国民事诉讼法》和《诉讼费用交纳办法》的规定，当事人应当向人民法院交纳的诉讼费用包括案件受理费、申请费、证人、鉴定人、翻译人员、理算人员在人民法院指定日期出庭发生的交通费、住宿费、生活费和误工补贴。所以，提起诉讼应当按照法律规定及时足额交纳诉讼费用。</p>
      <p class="content">（二）申请减免缓诉讼费用的条件</p>
      <p
        class="content"
      >根据你的案情，建议你可以因生活困难申请减免诉讼费用，申请时需要提交身份证，提供本人及其家庭经济状况符合当地民政、劳动保障等部门规定的公民经济困难标准的证明材料。</p>
      <p class="content">（三）不按时交纳诉讼费用的风险</p>
      <p
        class="content"
      >当事人起诉或者上诉，不按时预交诉讼费用，或者提出缓交、减交、免交诉讼费用申请未获批准仍不交纳诉讼费用的，人民法院将会裁定按自动撤回起诉、上诉处理。当事人提出反诉，不按规定预交相应的案件受理费的，人民法院将不会审理。</p>
      <p class="title_min">三、涉及的法律法规</p>
      <p class="content">
        1. 《中华人民共和国民事诉讼法》
        第一百一十八条 当事人进行民事诉讼，应当按照规定交纳案件受理费。财产案件除交纳案件受理费外，并按照规定交纳其他诉讼费用。
        当事人交纳诉讼费用确有困难的，可以按照规定向人民法院申请缓交、减交或者免交。
        收取诉讼费用的办法另行制定。
      </p>
      <p class="content">
        2.《诉讼费用交纳办法》
        第二条 当事人进行民事诉讼、行政诉讼，应当依照本办法交纳诉讼费用。
        第六条 当事人应当向人民法院交纳的诉讼费用包括：
      </p>
      <p class="content">（一）案件受理费；</p>
      <p class="content">（二）申请费；</p>
      <p class="content">（三）证人、鉴定人、翻译人员、理算人员在人民法院指定日期出庭发生的交通费、住宿费、生活费和误工补贴。</p>
      <p class="content">
        第二十二条 原告自接到人民法院交纳诉讼费用通知次日起7日内交纳案件受理费；反诉案件由提起反诉的当事人自提起反诉次日起7日内交纳案件受理费。
        上诉案件的案件受理费由上诉人向人民法院提交上诉状时预交。双方当事人都提起上诉的，分别预交。上诉人在上诉期内未预交诉讼费用的，人民法院应当通知其在7日内预交。
        申请费由申请人在提出申请时或者在人民法院指定的期限内预交。
        当事人逾期不交纳诉讼费用又未提出司法救助申请，或者申请司法救助未获批准，在人民法院指定期限内仍未交纳诉讼费用的，由人民法院依照有关规定处理。
      </p>
      <p class="content">
        第四十四条 当事人交纳诉讼费用确有困难的，可以依照本办法向人民法院申请缓交、减交或者免交诉讼费用的司法救助。
        诉讼费用的免交只适用于自然人。
      </p>
      <p class="content">第四十五条 当事人申请司法救助，符合下列情形之一的，人民法院应当准予免交诉讼费用：</p>
      <p class="content">（一）残疾人无固定生活来源的；</p>
      <p class="content">（二）追索赡养费、扶养费、抚育费、抚恤金的；</p>
      <p class="content">（三）最低生活保障对象、农村特困定期救济对象、农村五保供养对象或者领取失业保险金人员，无其他收入的；</p>
      <p class="content">（四）因见义勇为或者为保护社会公共利益致使自身合法权益受到损害，本人或者其近亲属请求赔偿或者补偿的；</p>
      <p class="content">（五）确实需要免交的其他情形。</p>
      <p class="content">第四十六条 当事人申请司法救助，符合下列情形之一的，人民法院应当准予减交诉讼费用：</p>
      <p class="content">（一）因自然灾害等不可抗力造成生活困难，正在接受社会救济，或者家庭生产经营难以为继的；</p>
      <p class="content">（二）属于国家规定的优抚、安置对象的；</p>
      <p class="content">（三）社会福利机构和救助管理站；</p>
      <p class="content">（四）确实需要减交的其他情形。</p>
      <p class="content">人民法院准予减交诉讼费用的，减交比例不得低于30%。</p>
      <p class="content">
        第四十八条 当事人申请司法救助，应当在起诉或者上诉时提交书面申请、足以证明其确有经济困难的证明材料以及其他相关证明材料。
        因生活困难或者追索基本生活费用申请免交、减交诉讼费用的，还应当提供本人及其家庭经济状况符合当地民政、劳动保障等部门规定的公民经济困难标准的证明。
        人民法院对当事人的司法救助申请不予批准的，应当向当事人书面说明理由。
      </p>
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
    this.score = parseInt(localStorage.getItem("key9"));
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
    top: 2360px;
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