<template>
  <div class="box">
    <!-- 法院logo -->
    <div class="fayuan">
      <img src="../../static/images/fayuan.png" alt />
    </div>

    <!-- 法院名称 -->
    <div class="name">
      <p>{{name}}</p>
    </div>

    <!-- 15个诉讼按钮 -->
      <el-row>
        <el-button @click="toZulin"><i class="iconfont icon-house"></i><span>{{zulin}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toMaimai"><i class="iconfont icon-icon-contract"></i><span>{{buy}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toJiedai"><i class="iconfont icon-qian"></i><span>{{people}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toBaoxian"><i class="iconfont icon-baoxianxinxi"></i><span>{{Insurance}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toFuyang"><i class="iconfont icon-zhengjian"></i><span>{{change}}</span></el-button>
      </el-row>
      <el-row>
        <el-button  @click="toHunyin"><i class="iconfont icon-icon2"></i><span>{{divorce}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toJinrong"><i class="iconfont icon-jinrongqianbi"></i><span>{{financial}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toJiaotong"><i class="iconfont icon-yiliaohangyedeICON-"></i><span>{{car}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toDanbao"><i class="iconfont icon-baoxian"></i><span>{{ensure}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toHouseRemove"><i class="iconfont icon-gongchengxiangmu"></i><span>{{division}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toJianzhu"><i class="iconfont icon-jianshe-"></i><span>{{construction}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toTudi"><i class="iconfont icon-bingtu"></i><span>{{land}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toLaodong"><i class="iconfont icon-ai-connection"></i><span>{{labour}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toSunhai"><i class="iconfont icon-renshensunhaipeichang"></i><span>{{damage}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toFeisu"><i class="iconfont icon-jiejue"></i><span>{{solve}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toFengxian"><i class="iconfont icon-fengxianxinxi"></i><span>{{risk}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toPinggu"><i class="iconfont icon-pinggu"></i><span>{{assess}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toHouseBuy"><i class="iconfont icon-fangwumaimai"></i><span>{{house}}</span></el-button>
      </el-row>
      <el-row>
        <el-button @click="toGuQuan"><i class="iconfont icon-zhuanrang"></i><span>{{transfer}}</span></el-button>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "北京市朝阳区人民法院",
      zulin:"租赁合同纠纷",
      buy:"买卖合同纠纷",
      people:"民间借贷纠纷",
      Insurance:"保险纠纷",
      change:"变更抚养关系纠纷",
      divorce:"婚姻纠纷",
      financial:"金融借款合同纠纷",
      car:"交通事故责任纠纷",
      ensure:"担保合同纠纷",
      division:"房屋拆迁纠纷",
      construction:"建筑工程纠纷",
      land:"土地合同纠纷",
      labour:"劳动争议纠纷",
      damage:"人身损害赔偿纠纷",
      solve:"非诉解决纠纷",
      risk:"高风险场景",
      assess:"评估减免诉费",
      house:"房屋买卖纠纷",
      transfer:"股权转让合同纠纷"
    };
  },
  methods:{
    toZulin(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/zl_one'})
      },300)
    },
    toHunyin(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/hy_one'})
      },300)
    },
    toLaodong(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/ld_one'})
      },300)
    },
    toBaoxian(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/bx_one'})
      },300)
    },
    toDanbao(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/db_one'})
      },300)
    },
    toHouseRemove(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/cq_one'})
      },300)
    },
    toMaimai(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/mm_one'})
      },300)
    },
    toJiedai(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/jd_one'})
      },300)
    },
    toTudi(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/td_one'})
      },300)
    },
    toJianzhu(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/jz_one'})
      },300)
    },
    toJiaotong(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/jt_one'})
      },300)
    },
    toJinrong(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/jr_one'})
      },300)
    },
    toSunhai(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/sh_one'})
      },300)
    },
    toFuyang(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/fy_one'})
      },300)
    },
    toFeisu(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/fs_one'})
      },300)
    },
    toFengxian(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/fx_one'})
      },300)
    },
    toPinggu(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/pg_one'})
      },300)
    },
    toHouseBuy(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/hb_one'})
      },300)
    },
    toGuQuan(){
      let _this=this
      setTimeout(function(){
        _this.$router.push({path:'/gq_one'})
      },300)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  position: relative;
  /* width: 100%; */
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
.fayuan {
  position: relative;
  width: 0.3rem;
  height: 0.3rem;
  left: 50%;
  margin-left: -0.15rem;
  margin-top: 0.2rem;
}
.fayuan img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.name {
  width: 100%;
  margin-top: 0.1rem;
}
p {
  text-align: center;
  font-size: 0.14rem;
  letter-spacing: 0.02rem;
}
.el-row{
  position: relative;
  margin-top: 0.2rem;
  margin-bottom: 0.1rem;
  height: 0.6rem;
}
.el-button{
  position: absolute;
  top: 0;
  width: 100%;
  height: 0.6rem;
}
.el-button span{
  position: absolute;
  left: 0.8rem;
  top: 0.25rem;
  font-size: 0.12rem;
}
.iconfont{
  position: absolute;
  left: 0.3rem;
  top: 0.15rem;
  font-size: 0.3rem
}
.icon-house{
  color: #f9ce89;
}
.icon-icon-contract{
  color: #eb9cf7;
}
.icon-qian{
  color: #f9bb70;
}
.icon-tianping{
  color: #a89587;
}
.icon-baoxianxinxi{
  color: #fdc161;
}
.icon-zhengjian{
  color: #d4c0a8;
}
.icon-icon2{
  color: #ffc386;
}
.icon-jinrongqianbi{
  color: #89b7f5;
}
.icon-yiliaohangyedeICON-{
  color: #8bacd9;
}
.icon-baoxian{
  color: #03bcae;
}
.icon-hands-fill{
  color: #f0a0c5;
}
.icon-gongchengxiangmu{
  color: #ff5f5f;
}
.icon-jianshe-{
  color: #80bafa;
}
.icon-bingtu{
  color: #ff5f5f;
}
.icon-ai-connection{
  color: #00b9ff;
}
.icon-renshensunhaipeichang{
  color: #da6262
}
.icon-jiejue{
  color: #a1d471
}
.icon-fengxianxinxi{
  color: #d37f7f
}
.icon-pinggu{
  color: #78bfda
}
.icon-fangwumaimai{
  color: #bdad64
}
.icon-zhuanrang{
  color: #6cc5c5
}
</style>
