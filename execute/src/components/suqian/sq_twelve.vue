<template>
  <div class="box">
    <p class="title">执行风险评估</p>
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
        >指数最高分为100分，数值越高说明风险越高，具体分为：较低风险（75-100）、一般风险（50-74）、中等风险（25-49）、重大风险（0-24）</p>
      </div>
    </div>
    <div class="word">
      <p class="title_min">一、您的个人情况</p>
      <div class="title_min_down">（一）申请诉前保全的法院：</div>
      <p class="content">被保全财产所在地</p>
      <p class="content">被执行人住所地</p>
      <p class="content">对案件有管辖权的人民法院</p>
      <div class="title_min_down">（二）提交的文件和证件：</div>
      <p class="content">诉前保全申请书</p>
      <p class="content">申请执行人的身份证明（身份证、营业执照、组织机构代码证、法定代表人身份证明）</p>
      <p class="content">其他应当提交的文件或证件</p>
      <div class="title_min_down">（三）申请诉前保全的条件：</div>
      <p class="content">因情况紧急，不立即申请保全将会使我的合法权益受到难以弥补的损害</p>
      <p class="content">我申请诉前保全的时间是在向人民法院提起诉讼前</p>
      <p class="content">我是利害关系人</p>
      <p class="content">我提供了担保（物的担保、现金担保、人的担保、保险担保）</p>
      <div class="title_min_down">（四）申请保全的范围：</div>
      <p class="content">与我准备提出的诉讼请求的内容相等或相符</p>
      <p class="content">债务人享有所有权或使用权的财产</p>
      <p class="content">债务人应得的收益</p>
      <p class="content">债务人的到期债权</p>
      <p class="content">债务人所有的其他人享有抵押权、质押权或留置权的财产</p>
      <p class="content">债务人的其他财产</p>
      <div class="title_min_down">（五）被申请人的信息：</div>
      <p class="content">我知道被申请人的住所地（或经常居住地）</p>
      <p class="content">我知道被申请人的联系方式（或者公司法定代表人联系方式）</p>
      <p class="content">我知道被申请人的大致范围，但不能确定具体位置</p>
      <p class="content">我知道被申请人的微信号、支付宝账号、QQ号或邮箱账号</p>
      <p class="content">我不知道被申请人的经常居住地，但能找到他</p>
      <div class="title_min_down">（六）被申请人的财产状况或者个人收入情况：</div>
      <p class="content">被申请人财产状况不错，有房产、银行存款、车辆、其他财产</p>
      <p class="content">被申请人有一部分财产，但不能履行全部债务</p>
      <p class="content">被申请人无财产</p>

      <p class="title_min">二、执行风险清单</p>
      <p class="content">《中华人民共和国民事诉讼法》第一百零五条 申请有错误的，申请人应当赔偿被申请人因保全所遭受的损失。</p>
      <p class="content">《中华人民共和国民事诉讼法》第一百零一条　利害关系人因情况紧急，不立即申请保全将会使其合法权益受到难以弥补的损害的，可以在提起诉讼或者申请仲裁前向被保全财产所在地、被申请人住所地或者对案件有管辖权的人民法院申请采取保全措施。申请人应当提供担保，不提供担保的，裁定驳回申请</p>
      <p class="content">申请人在人民法院采取保全措施后三十日内不依法提起诉讼或者申请仲裁的，人民法院应当解除保全。</p>
      <p class="content">对案件相关法律规定不熟悉可能会有不予受理的风险，相关法规如下： </p>
      <p class="content">《最高人民法院关于人民法院执行工作若干问题的规定(试行)》18条人民法院受理执行案件应当符合下列条件：</p>
      <p class="content">（１）申请或移送执行的法律文书已经生效；</p>
      <p class="content">（２）申请执行人是生效法律文书确定的权利人或其继承人、权利承受人；</p>
      <p class="content">（３）申请执行人在法定期限内提出申请；</p>
      <p class="content">（４）申请执行的法律文书有给付内容，且执行标的和被执行人明确；</p>
      <p class="content">（５）义务人在生效法律文书确定的期限内未履行义务；</p>
      <p class="content">（６）属于受申请执行的人民法院管辖。 </p>
      <p class="content">准确提供被执行人的住所地址、联系方式等信息，将会有利于判决书、裁定书、调解书，以及支付令的执行。</p>
      <p class="content">被执行人下落不明，会导致生效法律文书确定的债权无承担义务的主体而无法及时的执行或无法执行的风险。《中华人民共和国民事诉讼法》第九十二条 受送达人下落不明，或者用本节规定的其他方式无法送达的，公告送达。自发出公告之日起，经过六十日，即视为送达。</p>
      <p class="content">执行债权能否实现，最终取决于被执行人有无财产可供执行。因此，当被执行人的财产不足以或不能抵偿全部债务的时候，即使通过法律手段，也不可能凭空完成执行；对于原告来说，就意味着将会面临执行延误或无法执行的风险。 受送达人下落不明，或者用本节规定的其他方式无法送达的，公告送达。自发出公告之日起，经过六十日，即视为送达。</p>
      <p class="content">正所谓清官难断家务事，难断的不是事，而是家务。原本的亲朋好友，可能会因为司法的介入而变的难再和睦相处，甚至因为对簿公堂而反目成仇的新闻也不乏常见，这是家人所不想看见的结果，所以在提起诉讼前还是需要三思而行。 受送达人下落不明，或者用本节规定的其他方式无法送达的，公告送达。自发出公告之日起，经过六十日，即视为送达。</p>
      <p class="content">每天工作8小时，同事之间抬头不见低头见，既是工作伙伴，有的更会发展为好友，但司法介入之后，这一切很有可能不复存在，日后工作也会难免尴尬，不明就里的其他同事多少会有写各自的看法，这可能会影响你今后的职业生涯。 受送达人下落不明，或者用本节规定的其他方式无法送达的，公告送达。自发出公告之日起，经过六十日，即视为送达。</p>
      <p class="content">常言道：远亲不如近邻，家家有本难念的经，但有的时候真的能帮到你的就在你身边，不要因为一时冲动而寻求司法介入，一旦介入，日后出门时将会面临多大的心理挑战将不得而知。 受送达人下落不明，或者用本节规定的其他方式无法送达的，公告送达。自发出公告之日起，经过六十日，即视为送达。</p>
      <p class="content">知人知面不知心，更何况不熟悉、不认识的人呢，为了不给自己徒增烦恼，以后遇到类似情况三思而行，不要一时头脑发热。</p>
      <p class="content">法院执行会有债权短期内无法实现的风险。 法院执行不像讨债公司要债，整个过程是由立案、调查、保全、仲裁、执行等一系列法律行为贯穿始终，保障申请人与被执行人的法律权利的法律行为，而这一系列法律行为都是有明确的规定，包括时限、流程规范； 而且执行工作本身也是需要时间才能够完成的，甚至有的案件由于被执行人没有财产或财产不足而使执行工作变成了一个长期而又艰难的工作，是无法解决急需用钱的难处的。 《关于人民法院办理执行案件若干期限的规定》第一条　被执行人有财产可供执行的案件，一般应当在立案之日起6个月内执结；非诉执行案件一般应当在立案之日起3个月内执结。 有特殊情况须延长执行期限的，应当报请本院院长或副院长批准。</p>
      <p class="content">如需申请回避的请口头申请回避或者书面申请回避。如发现办案人员有违法违规执行的请向相关部门实名举报，我们将依法处理。</p>
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
      danger: "",
      number: "",
      score: 0,
      value: ""
    };
  },
  created() {
    this.score = parseInt(localStorage.getItem("key11"));
  },
  mounted() {
    console.log(this.score);
    if (this.score >= 0 && this.score < 25) {
      this.$refs.triangle.style.left = this.score - 3 + "%";
      this.$refs.danger_type.style.backgroundColor = "#eb1515";
      this.danger = "重大风险";
      this.number = this.score;
    } else if (this.score >= 25 && this.score <= 49) {
      this.$refs.triangle.style.left = this.score - 3 + "%";
      this.$refs.danger_type.style.backgroundColor = "#ef9a09";
      this.danger = "中等风险";
      this.number = this.score;
    } else if (this.score >= 50 && this.score <= 74) {
      this.$refs.triangle.style.left = this.score - 3 + "%";
      this.$refs.danger_type.style.backgroundColor = "#eee30d";
      this.danger = "一般风险";
      this.number = this.score;
    } else if (this.score >= 75 && this.score <= 100) {
      this.$refs.triangle.style.left = this.score - 3 + "%";
      this.$refs.danger_type.style.backgroundColor = "#64cd11";
      this.danger = "较低风险";
      this.number = this.score;
    } else if (this.score > 100) {
      this.$refs.triangle.style.left = 96 + "%";
      this.$refs.danger_type.style.backgroundColor = "#64cd11";
      this.danger = "较低风险";
      this.number = 100;
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
        background-color: #eb1515;
      }
      .line_two {
        background-color: #ef9a09;
      }
      .line_three {
        background-color: #eee30d;
      }
      .line_four {
        background-color: #64cd11;
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
    .title_min_down{
        font-size: 14px;
        color: #666;
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
    left: 50%;
    margin-left: -75px;
    margin-top: -70px;
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