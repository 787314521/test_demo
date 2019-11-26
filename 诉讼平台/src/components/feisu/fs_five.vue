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
      <p class="title_min">一、小建议</p>
      <p
        class="content"
      >为充分保护当事人的合法权益，以便当事人谨慎地通过诉讼手段解决纠纷，根据《中华人民共和国民法通则》、《中华人民共和国民事诉讼法》以及最高人民法院《关于民事诉讼证据的若干规定》等法律和司法解释的规定，特预先告知你在案件审理和执行中可能会出现的风险。</p>
      <p class="content">
        一、起诉不符合条件
        当事人起诉不符合法律规定条件的，人民法院不会受理，即使受理也会驳回起诉。
        当事人起诉不符合管辖规定的，案件将会被移送到有权管辖的人民法院审理。
      </p>
      <p class="content">
        二、诉讼请求不适当
        当事人提出的诉讼请求应明确、具体、完整，对未提出的诉讼请求人民法院不会审理。
        当事人提出的诉讼请求要适当，不要随意扩大诉讼请求范围；无根据的诉讼请求，除得不到人民法院支持外，当事人还要负担相应的诉讼费用。
      </p>
      <p class="content">
        三、逾期改变诉讼请求
        当事人增加、变更诉讼请求或者提出反诉，超过人民法院许可或者指定期限的，可能不被审理。
      </p>
      <p class="content">
        四、超过诉讼时效
        当事人请求人民法院保护民事权利的期间一般为二年（特殊的为一年）。原告向人民法院起诉后，被告提出原告的起诉已超过法律保护期间的，如果原告没有对超过法律保护期间的事实提供证据证明，其诉讼请求不会得到人民法院的支持。
      </p>
      <p class="content">
        五、授权不明
        当事人委托诉讼代理人代为承认、放弃、变更诉讼请求，进行和解，提起反诉或者上诉等事项的，应在授权委托书中特别注明。没有在授权委托书中明确、具体记明特别授权事项的，诉讼代理人就上述特别授权事项发表的意见不具有法律效力。
      </p>
      <p class="content">
        六、不按时交纳诉讼费用
        当事人起诉或者上诉，不按时预交诉讼费用，或者提出缓交、减交、免交诉讼费用申请未获批准仍不交纳诉讼费用的，人民法院将会裁定按自动撤回起诉、上诉处理。
        当事人提出反诉，不按规定预交相应的案件受理费的，人民法院将不会审理。
      </p>
      <p class="content">
        七、申请财产保全不符合规定
        当事人申请财产保全，应当按规定交纳保全费用而没有交纳的，人民法院不会对申请保全的财产采取保全措施。
        当事人提出财产保全申请，未按人民法院要求提供相应财产担保的，人民法院将依法驳回其申请。
        申请人申请财产保全有错误的，将要赔偿被申请人因财产保全所受到的损失。
      </p>
      <p class="content">
        八、不提供或者不充分提供证据
        除法律和司法解释规定不需要提供证据证明外，当事人提出诉讼请求或者反驳对方的诉讼请求，应提供证据证明。不能提供相应的证据或者提供的证据证明不了有关事实的，可能面临不利的裁判后果。
      </p>
      <p class="content">
        九、超过举证时限提供证据
        当事人向人民法院提交的证据，应当在当事人协商一致并经人民法院认可或者人民法院指定的期限内完成。超过上诉期限提交的，人民法院可能视其放弃了举证的权利，但属于法律和司法解释规定的新的证据除外。
      </p>
      <p class="content">
        十、不提供原始证据
        当事人向人民法院提供证据，应当提供原件或者原物，特殊情况下也可以提供经人民法院核对无异的复制件或者复制品。提供的证据不符合上述条件的，可能影响证据的证明力，甚至可能不被采信。
      </p>
      <p class="content">
        十一、证人不出庭作证
        除属于法律和司法解释规定的证人确有困难不能出庭的特殊情况外，当事人提供的证人证言，证人应当出庭作证并接受质询。如果证人不出庭作证，可能影响该证人证言的证据效力，甚至不被采信。
      </p>
      <p class="content">
        十二、不按规定申请审计、评估、鉴定
        当事人申请审计、评估、鉴定，未在人民法院指定期限内提出申请或者不预交审计、评估、鉴定费用，或者不提供相关材料，致使争议的事实无法通过审计、评估、鉴定结论予以认定的，可能对申请人产生不利的裁判后果。
      </p>
      <p class="content">
        十三、不按时出庭或者中途退出法庭
        原告经传票传唤，无正当理由拒不到庭，或者未经法庭许可中途退出法庭的，人民法院经按自动撤回起诉处理；被告反诉的，人民法院将对反诉的内容缺席审判。
        被告经传票传唤，无正当理由拒不到庭，或者未经法庭许可中途退出法庭的，人民法院将缺席判决。
      </p>
      <p class="content">
        十四、不准确提供送达地址
        适用简易程序审理的案件，人民法院按照当事人自己提供的送达地址送达诉讼文书时，因当事人提供的已方送达地址不准确，或者送达地址变更未及时告知人民法院，致使人民法院无法送达，造成诉讼文书被退回的，诉讼文书也视为送达。
      </p>
      <p class="content">
        十五、超过期限申请强制执行
        向人民法院申请强制执行的期限为二年。期限自生效法律文书确定的履行义务期限届满之日起算；法律文书未规定履行期间的，从法律文书生效之日起算。超过上述期限申请的，除存在申请执行时效中止、中断等法定情形外，人民法院不予受理。
      </p>
      <p class="content">
        十六、无财产或者无足够财产可供执行
        被执行人没有财产或者没有足够财产履行生效法律文书确定义务的，人民法院可能对未履行的部分裁定中止执行，申请执行人的财产权益将可能暂时无法实现或者不能完全实现。
      </p>
      <p class="content">
        十七、不履行生效法律文书确定义务
        被执行人未按生效法律文书指定期间给付金钱义务的，将要支付迟延履行期间的双倍债务利息。
        被执行人未按生效法律文书指定期间履行其他义务的，将要支付迟延履行金。
      </p>
      <p
        class="content"
      >第一，执行前和解协议的履行期应控制在法定申请执行期限之内。《民事诉讼法》第二百一十九条规定：“申请执行的期限，双方或者一方当事人是公民的为一年，双方是法人或者其他组织的为六个月。”这样，万一债务人不按照执行前和解协议履行义务，债权人可以在法定的期限内向法院申请执行，从而有效避免了丧失请求法院强制执行以保护自身合法权益的权利。</p>
      <p
        class="content"
      >第二，执行前和解协议应采用书面形式订立。最高人民法院1997年4月16日《关于超过诉讼时效期间当事人达成的和解协议是否应当受法律保护问题的批复》中规定：“超过诉讼时效期间，当事人双方就原债务达成的和解协议，属于新的债权、债务关系。”显然，该司法解释认为就原债务达成的和解协议已经不再是原来的债务法律关系，因此不属于一案再审的情况。如此，债权人只要注意在和解协议中建立新的债的关系，即使原生效的法律判决的债权超过申请执行的期限，也能以新的债务关系向法院提起诉讼，主张权利。</p>
      <p
        class="content"
      >第三，坚持以在法院执行庭主持下的和解为主渠道。执行前自行和解虽然有一些好处，但弄不好就引起麻烦，还是以在法院执行庭主持下进行的执行和解为主较妥。《民事诉讼法》第二百一十一条规定：“在执行中，双方当事人自行和解达成协议的，执行人员应将协议内容记入笔录，由双方当事人签名或者盖章。一方当事人不履行和解协议的，人民法院可以根据对方当事人的申请，恢复对原生效法律文书的执行。”由此可见，执行和解是在执行过程中，当事人双方以终结执行程序为目的，通过协商，自愿就法律文书确定的权利义务达成协议的一种制度。由于执行和解是当事人在法律规定的范围内处分自己民事实体权利和申请法院强制执行权利的一种正当行为，因此对双方当事人均产生法律上的约束力，双方必须全面履行协议义务，一方不履行的，对方有权申请法院强制执行或者行使撤销权。这就为保障胜诉方的权利提供了有利的条件，从而也较好地规避了胜诉方的风险，保障了债权的安全度。</p>
      <p
        class="content"
      >(1)超过申诉期限：申诉期限是指，申诉人应当自劳动争议发生之日起60日内向仲裁委提出书面申请，此60日为申诉期限。无正当理由逾期提出申请的为超过仲裁申诉期限。超过申诉期限申请劳动仲裁，又不能证明有中止、中断、延长事由的，除对方当事人认可外，将承担丧失胜诉权的风险。</p>
      <p class="content">(2)不符合受理条件:申诉应当符合法律规定的受理条件，否则就要承担不予受理的风险。</p>
      <p class="content">(3)相关请求超过法定期限:当事人增加、变更申诉请求或者提出反诉，以及提出管辖异议、申请回避等应当在法定期限内提出，否则要承担请求不被准许的风险。</p>
      <p class="content">(4)举证不力:当事人对自己提出的事实主张，如果没有证据或证据不充分，该事实将不能得到仲裁委的确认，有可能导致败诉的后果。</p>
      <p class="content">(5)超过举证期限:当事人应当在仲裁委确定的举证期限内向仲裁委提交证据材料，当事人在举证期限内不提交的，要承担不利后果。</p>
      <p
        class="content"
      >(6)逾期或不提供鉴定材料:对需要鉴定的事项负有举证责任的当事人，在仲裁委指定的期限内无正当理由，不提出鉴定申请或不预交鉴定费用或拒不提供相关材料，致使对案件争议的事实无法通过坚定论予以认定的，应当对该事实承担举证不能的法律后果。</p>
      <p class="content">(7)拒不提供证据:有证据证明一方当事人持有证据无正当理由拒不提供，如果对方当事人主张该证据的内容不利于证据持有人，可以推定该主张成立。</p>
      <p class="content">(8)证人未出庭作证:当事人提供证人证言的，除法律、司法解释规定的特殊情况外，证人应当亲自到庭作证接受询问，否则将承担证人证明力弱的风险。</p>
      <p
        class="content"
      >(9)拒绝提供送达地址:仲裁委以当事人提供的送达地址送达仲裁文书。如果当事人拒绝提供自己的送达地址及联系方式，经仲裁委告知后仍然不提供的，对申诉人不予立案;被诉人作为劳动者的，以其户籍登记中住所或经常居住地为送达地址;被诉人为用人单位，以其工商登记或者其他依法登记、备案中的住所为送达地址。</p>
      <p
        class="content"
      >(10)当事人未实际收到仲裁文书:因当事人自己提供的送达地址不准确、送达地址变更未及时告知仲裁委，或者当事人拒不提供自己的送达地址而导致仲裁文书未能被当事人实际接收的，仲裁委将按下列方式处理： A.邮寄送达的，以邮件回执上注明的退回之日视为送达之日; B.直接送达的，送达人当场在送达回证上记明情况之日视为送达之日。</p>
      <p
        class="content"
      >(11)延长案件审理时间:仲裁委处理劳动争议案件的期限为60天。但是如果遇到案情复杂、需要鉴定、仲裁文书送达困难等情况，可能不能在规定的期限内结案，需要办理案件审理中止或延期手续。</p>
      <p class="content">(12)拒收、拒签收仲裁文书:当事人拒收、拒签仲裁文书，不妨碍仲裁文书发生法律效力，并可能影响其起诉权及其他权利的行使。</p>
      <p
        class="content"
      >(13)拒不出庭及违反仲裁庭纪律:当事人无正当理由拒不到庭、未经仲裁庭允许中途退庭、严重违反仲裁庭纪律并经劝告不改的，对申诉人按撤诉处理，对被诉人按缺席审理裁决。</p>
      <p
        class="content"
      >依个人意愿，你愿意采用调解方式解决纠纷。你可前往人民调解委员会要求调解，也可请法院代为组织安排。经人民调解委员会调解达成的调解协议，具有法律约束力。人民调解有利于矛盾纠纷及时解决，防止矛盾纠纷的激化和升级。具有简捷、及时和经济的特点，在调解委员会的主持下，能够实现就近、及时地化解民间纠纷，以最短的时间完成矛盾纠纷的处理。</p>
      <p class="content">一、调解协议的法律效力</p>
      <p
        class="content"
      >双方自愿达成的调解协议可向人民法院申请司法确认，人民法院经审查符合法律规定的，裁定调解协议有效，一方当事人拒绝履行，或者未全部履行的，对方当事人可以向人民法院申请强制执行</p>
      <p class="content">二、相关法律法规参考</p>
      <p class="content">
        1.《中华人民共和国民事诉讼法》第一百九十四条规定：申请司法确认调解协议，由双方当事人依照人民调解法等法律，自调解协议生效之日起三十日内，共同向调解组织所在地基层人民法院提出
        第一百九十五条规定：人民法院受理申请后，经审查，符合法律规定的，裁定调解协议有效，一方当事人拒绝履行或者未全部履行的，对方当事人可以向人民法院申请执行；不符合法律规定的，裁定驳回申请，当事人可以通过调解方式变更原调解协议或者达成新的调解协议，也可以向人民法院提起诉讼
      </p>
      <p
        class="content"
      >2.《人民调解工作若干规定》第十条规定：“人民调解委员会可以采用以下形式设立：一、是村民、居民委员会设立的人民调解委员会；二是乡镇、街道设立的人民调解委员会；三是企业事业单位设立的人民调解委员会；四、是根据需要设立的区域性、行业性的人民调解委员会。</p>
      <p
        class="content"
      >3.《中华人民共和国人民调解法》第三十三条规定：经人民调解委员会调解达成调解协议后，双方当事人认为有必要的，可以自调解协议生效之日起三十日内共同向人民法院申请司法确认，人民法院应当及时对调解协议进行审查，依法确认调解协议的效力。人民法院依法确认调解协议有效，一方当事人拒绝履行或者未全部履行的，对方当事人可以向人民法院申请强制执行。</p>
      <p class="content">
        行政调解，同人民调解一样，属于诉讼外调解，所达成的协议均不具有法律上的强制执行的效力，但对当事人均应具有约束力。因为，行政调解和人民调解一样，均是在自愿的基础上所进行的调解活动，按照现有法律规定，当事人对所达成的协议，都应当自觉履行。因此，可以说行政调解所达成的协议，仍应与人民调解所达成的协议一样，对当事人具有约束力。主要常指的行政调解有这样几类：(一)基层人民政府的调解。主要调解民事纠纷和轻微刑事案件，由乡镇人民政府和街道办事处的司法助理员负责进行。(二)国家合同管理机关的调解。主要是国家工商行政管理局和地方各级工商行政管理局。法人之间和个体工商户，公民和法人之间的经济纠纷，都可以向工商行政管理机关申请调解。(三)公安机关的调解。对于因民间纠纷引起的打架斗殴或者损毁他人财物等违反治安管理的行为，情节轻微的，公安机关可以调解处理。公安机关在处理交通事故组织过程中可以组织当事人和有关人员对损害赔偿进行调解。(四)婚姻登记机关的调解。中国婚姻法规定，男、女一方提出离婚，可由有关部门进行调解或直接向人民法院提出离婚诉讼。
        行政复议是指复议机关根据当事人申请，依法对行政行为进行审查，并作出复议决定的行政行为，是当前处理民告官案件、化解行政争议的主渠道。
      </p>
      <p class="content">一、行政复议的范围</p>
      <p class="content">绝大多数行政机关的行政决定都可以提起行政复议。但是，仍有几类行政决定不可以提起行政复议：</p>
      <p class="content">1.国家行为，比如与国防、外交、军事等有关的行政决定。</p>
      <p class="content">2.内部人事关系处理行为，比如行政机关对工作人员的奖惩、任免等决定。</p>
      <p class="content">3.对民事纠纷的调处行为，包括对民事纠纷的仲裁或者调解。</p>
      <p class="content">二、行政复议的时限</p>
      <p class="content">公民、法人或者其他组织认为具体行政行为侵犯其合法权益，一般情况下，应自知道该具体行政行为之日起60日内提出行政复议申请。</p>
      <p class="content">三、行政复议的受理机关</p>
      <p class="content">一般情况下，申请人既可以选择向作出具体行政行为的行政机关的上一级主管部门申请复议，也可以向该行政机关的同级人民政府申请复议。</p>
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
    top: 6820px;
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