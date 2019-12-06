import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// 租赁纠纷路由
import zl_one from '@/components/zulin/zl_one'
import zl_two from '@/components/zulin/zl_two'
import zl_three from '@/components/zulin/zl_three'
import zl_four from '@/components/zulin/zl_four'
import zl_five from '@/components/zulin/zl_five'
import zl_six from '@/components/zulin/zl_six'
import zl_seven from '@/components/zulin/zl_seven'
import zl_eight from '@/components/zulin/zl_eight'
import zl_nine from '@/components/zulin/zl_nine'
import zl_ten from '@/components/zulin/zl_ten'
import zl_eleven from '@/components/zulin/zl_eleven'
import zl_twelve from '@/components/zulin/zl_twelve'
import zl_thirteen from '@/components/zulin/zl_thirteen'
import zl_fourteen from '@/components/zulin/zl_fourteen'

// 婚姻纠纷路由
import hy_one from '@/components/hunyin/hy_one'
import hy_two from '@/components/hunyin/hy_two'
import hy_three from '@/components/hunyin/hy_three'
import hy_four from '@/components/hunyin/hy_four'
import hy_five from '@/components/hunyin/hy_five'
import hy_six from '@/components/hunyin/hy_six'
import hy_seven from '@/components/hunyin/hy_seven'
import hy_eight from '@/components/hunyin/hy_eight'
import hy_nine from '@/components/hunyin/hy_nine'
import hy_ten from '@/components/hunyin/hy_ten'
import hy_eleven from '@/components/hunyin/hy_eleven'
import hy_twelve from '@/components/hunyin/hy_twelve'
import hy_thirteen from '@/components/hunyin/hy_thirteen'
import hy_fourteen from '@/components/hunyin/hy_fourteen'
import hy_fifteen from '@/components/hunyin/hy_fifteen'
import hy_sixteen from '@/components/hunyin/hy_sixteen'
import hy_seventeen from '@/components/hunyin/hy_seventeen'
import hy_eighteen from '@/components/hunyin/hy_eighteen'
import hy_nineteen from '@/components/hunyin/hy_nineteen'

// 劳动纠纷路由
import ld_one from '@/components/laodong/ld_one'
import ld_two from '@/components/laodong/ld_two'
import ld_three from '@/components/laodong/ld_three'
import ld_four from '@/components/laodong/ld_four'
import ld_five from '@/components/laodong/ld_five'
import ld_six from '@/components/laodong/ld_six'
import ld_seven from '@/components/laodong/ld_seven'
import ld_eight from '@/components/laodong/ld_eight'
import ld_nine from '@/components/laodong/ld_nine'
import ld_ten from '@/components/laodong/ld_ten'
import ld_eleven from '@/components/laodong/ld_eleven'
import ld_twelve from '@/components/laodong/ld_twelve'
import ld_thirteen from '@/components/laodong/ld_thirteen'
import ld_fourteen from '@/components/laodong/ld_fourteen'
import ld_fifteen from '@/components/laodong/ld_fifteen'
import ld_sixteen from '@/components/laodong/ld_sixteen'
import ld_seventeen from '@/components/laodong/ld_seventeen'
import ld_eighteen from '@/components/laodong/ld_eighteen'
import ld_nineteen from '@/components/laodong/ld_nineteen'

// 保险纠纷路由
import bx_one from '@/components/baoxian/bx_one'
import bx_two from '@/components/baoxian/bx_two'
import bx_three from '@/components/baoxian/bx_three'
import bx_four from '@/components/baoxian/bx_four'
import bx_five from '@/components/baoxian/bx_five'
import bx_six from '@/components/baoxian/bx_six'
import bx_seven from '@/components/baoxian/bx_seven'
import bx_eight from '@/components/baoxian/bx_eight'
import bx_nine from '@/components/baoxian/bx_nine'
import bx_ten from '@/components/baoxian/bx_ten'
import bx_eleven from '@/components/baoxian/bx_eleven'
import bx_twelve from '@/components/baoxian/bx_twelve'
import bx_thirteen from '@/components/baoxian/bx_thirteen'

// 担保合同纠纷
import db_one from '@/components/danbao/db_one'
import db_two from '@/components/danbao/db_two'
import db_three from '@/components/danbao/db_three'
import db_four from '@/components/danbao/db_four'
import db_five from '@/components/danbao/db_five'
import db_six from '@/components/danbao/db_six'
import db_seven from '@/components/danbao/db_seven'
import db_eight from '@/components/danbao/db_eight'
import db_nine from '@/components/danbao/db_nine'
import db_ten from '@/components/danbao/db_ten'
import db_eleven from '@/components/danbao/db_eleven'
import db_twelve from '@/components/danbao/db_twelve'
import db_thirteen from '@/components/danbao/db_thirteen'
import db_fourteen from '@/components/danbao/db_fourteen'

// 买卖合同纠纷
import mm_one from '@/components/maimai/mm_one'
import mm_two from '@/components/maimai/mm_two'
import mm_three from '@/components/maimai/mm_three'
import mm_four from '@/components/maimai/mm_four'
import mm_five from '@/components/maimai/mm_five'
import mm_six from '@/components/maimai/mm_six'
import mm_seven from '@/components/maimai/mm_seven'
import mm_eight from '@/components/maimai/mm_eight'
import mm_nine from '@/components/maimai/mm_nine'
import mm_ten from '@/components/maimai/mm_ten'
import mm_eleven from '@/components/maimai/mm_eleven'
import mm_twelve from '@/components/maimai/mm_twelve'
import mm_thirteen from '@/components/maimai/mm_thirteen'

// 民间借贷纠纷
import jd_one from '@/components/jiedai/jd_one'
import jd_two from '@/components/jiedai/jd_two'
import jd_three from '@/components/jiedai/jd_three'
import jd_four from '@/components/jiedai/jd_four'
import jd_five from '@/components/jiedai/jd_five'
import jd_six from '@/components/jiedai/jd_six'
import jd_seven from '@/components/jiedai/jd_seven'
import jd_eight from '@/components/jiedai/jd_eight'
import jd_nine from '@/components/jiedai/jd_nine'
import jd_ten from '@/components/jiedai/jd_ten'
import jd_eleven from '@/components/jiedai/jd_eleven'
import jd_twelve from '@/components/jiedai/jd_twelve'
import jd_thirteen from '@/components/jiedai/jd_thirteen'
import jd_fourteen from '@/components/jiedai/jd_fourteen'
import jd_fifteen from '@/components/jiedai/jd_fifteen'

// 土地合同纠纷路由
import td_one from '@/components/tudi/td_one'
import td_two from '@/components/tudi/td_two'
import td_three from '@/components/tudi/td_three'
import td_four from '@/components/tudi/td_four'
import td_five from '@/components/tudi/td_five'
import td_six from '@/components/tudi/td_six'
import td_seven from '@/components/tudi/td_seven'
import td_eight from '@/components/tudi/td_eight'
import td_nine from '@/components/tudi/td_nine'
import td_ten from '@/components/tudi/td_ten'
import td_eleven from '@/components/tudi/td_eleven'
import td_twelve from '@/components/tudi/td_twelve'
import td_thirteen from '@/components/tudi/td_thirteen'

// 建筑工程纠纷
import jz_one from '@/components/jianzhu/jz_one'
import jz_two from '@/components/jianzhu/jz_two'
import jz_three from '@/components/jianzhu/jz_three'
import jz_four from '@/components/jianzhu/jz_four'
import jz_five from '@/components/jianzhu/jz_five'
import jz_six from '@/components/jianzhu/jz_six'
import jz_seven from '@/components/jianzhu/jz_seven'
import jz_eight from '@/components/jianzhu/jz_eight'
import jz_nine from '@/components/jianzhu/jz_nine'
import jz_ten from '@/components/jianzhu/jz_ten'
import jz_eleven from '@/components/jianzhu/jz_eleven'
import jz_twelve from '@/components/jianzhu/jz_twelve'
import jz_thirteen from '@/components/jianzhu/jz_thirteen'

// 交通事故纠纷
import jt_one from '@/components/jiaotong/jt_one'
import jt_two from '@/components/jiaotong/jt_two'
import jt_three from '@/components/jiaotong/jt_three'
import jt_four from '@/components/jiaotong/jt_four'
import jt_five from '@/components/jiaotong/jt_five'
import jt_six from '@/components/jiaotong/jt_six'
import jt_seven from '@/components/jiaotong/jt_seven'
import jt_eight from '@/components/jiaotong/jt_eight'
import jt_nine from '@/components/jiaotong/jt_nine'
import jt_ten from '@/components/jiaotong/jt_ten'
import jt_eleven from '@/components/jiaotong/jt_eleven'
import jt_twelve from '@/components/jiaotong/jt_twelve'
import jt_thirteen from '@/components/jiaotong/jt_thirteen'
import jt_fourteen from '@/components/jiaotong/jt_fourteen'

// 金融借款纠纷
import jr_one from '@/components/jinrong/jr_one'
import jr_two from '@/components/jinrong/jr_two'
import jr_three from '@/components/jinrong/jr_three'
import jr_four from '@/components/jinrong/jr_four'
import jr_five from '@/components/jinrong/jr_five'
import jr_six from '@/components/jinrong/jr_six'
import jr_seven from '@/components/jinrong/jr_seven'
import jr_eight from '@/components/jinrong/jr_eight'
import jr_nine from '@/components/jinrong/jr_nine'
import jr_ten from '@/components/jinrong/jr_ten'
import jr_eleven from '@/components/jinrong/jr_eleven'
import jr_twelve from '@/components/jinrong/jr_twelve'
import jr_thirteen from '@/components/jinrong/jr_thirteen'
import jr_fourteen from '@/components/jinrong/jr_fourteen'

// 人身损害纠纷
import sh_one from '@/components/sunhai/sh_one'
import sh_two from '@/components/sunhai/sh_two'
import sh_three from '@/components/sunhai/sh_three'
import sh_four from '@/components/sunhai/sh_four'
import sh_five from '@/components/sunhai/sh_five'
import sh_six from '@/components/sunhai/sh_six'
import sh_seven from '@/components/sunhai/sh_seven'
import sh_eight from '@/components/sunhai/sh_eight'
import sh_nine from '@/components/sunhai/sh_nine'
import sh_ten from '@/components/sunhai/sh_ten'
import sh_eleven from '@/components/sunhai/sh_eleven'
import sh_twelve from '@/components/sunhai/sh_twelve'
import sh_thirteen from '@/components/sunhai/sh_thirteen'

// 变更抚养关系纠纷
import fy_one from '@/components/fuyang/fy_one'
import fy_two from '@/components/fuyang/fy_two'
import fy_three from '@/components/fuyang/fy_three'
import fy_four from '@/components/fuyang/fy_four'
import fy_five from '@/components/fuyang/fy_five'
import fy_six from '@/components/fuyang/fy_six'
import fy_seven from '@/components/fuyang/fy_seven'
import fy_eight from '@/components/fuyang/fy_eight'
import fy_nine from '@/components/fuyang/fy_nine'
import fy_ten from '@/components/fuyang/fy_ten'
import fy_eleven from '@/components/fuyang/fy_eleven'
import fy_twelve from '@/components/fuyang/fy_twelve'

// 非诉解决纠纷
import fs_one from '@/components/feisu/fs_one'
import fs_two from '@/components/feisu/fs_two'
import fs_three from '@/components/feisu/fs_three'
import fs_four from '@/components/feisu/fs_four'
import fs_five from '@/components/feisu/fs_five'

// 高风险场景
import fx_one from '@/components/fengxian/fx_one'
import fx_two from '@/components/fengxian/fx_two'
import fx_three from '@/components/fengxian/fx_three'
import fx_four from '@/components/fengxian/fx_four'
import fx_five from '@/components/fengxian/fx_five'
import fx_six from '@/components/fengxian/fx_six'
import fx_seven from '@/components/fengxian/fx_seven'
import fx_eight from '@/components/fengxian/fx_eight'
import fx_nine from '@/components/fengxian/fx_nine'
import fx_ten from '@/components/fengxian/fx_ten'
import fx_eleven from '@/components/fengxian/fx_eleven'
import fx_twelve from '@/components/fengxian/fx_twelve'

// 评估减免诉费
import pg_one from '@/components/pinggu/pg_one'
import pg_two from '@/components/pinggu/pg_two'
import pg_three from '@/components/pinggu/pg_three'
import pg_four from '@/components/pinggu/pg_four'
import pg_five from '@/components/pinggu/pg_five'
import pg_six from '@/components/pinggu/pg_six'
import pg_seven from '@/components/pinggu/pg_seven'
import pg_eight from '@/components/pinggu/pg_eight'
import pg_nine from '@/components/pinggu/pg_nine'
import pg_ten from '@/components/pinggu/pg_ten'

//房屋拆迁纠纷
import cq_one from '@/components/chaiqian/cq_one'
import cq_two from '@/components/chaiqian/cq_two'
import cq_three from '@/components/chaiqian/cq_three'
import cq_four from '@/components/chaiqian/cq_four'
import cq_five from '@/components/chaiqian/cq_five'
import cq_six from '@/components/chaiqian/cq_six'
import cq_seven from '@/components/chaiqian/cq_seven'
import cq_eight from '@/components/chaiqian/cq_eight'
import cq_nine from '@/components/chaiqian/cq_nine'
import cq_ten from '@/components/chaiqian/cq_ten'
import cq_eleven from '@/components/chaiqian/cq_eleven'
import cq_twelve from '@/components/chaiqian/cq_twelve'
import cq_thirteen from '@/components/chaiqian/cq_thirteen'
import cq_fourteen from '@/components/chaiqian/cq_fourteen'
import cq_fifteen from '@/components/chaiqian/cq_fifteen'

//房屋买卖纠纷
import hb_one from '@/components/housebuy/hb_one'
import hb_two from '@/components/housebuy/hb_two'
import hb_three from '@/components/housebuy/hb_three'
import hb_four from '@/components/housebuy/hb_four'
import hb_five from '@/components/housebuy/hb_five'
import hb_six from '@/components/housebuy/hb_six'
import hb_seven from '@/components/housebuy/hb_seven'
import hb_eight from '@/components/housebuy/hb_eight'
import hb_nine from '@/components/housebuy/hb_nine'
import hb_ten from '@/components/housebuy/hb_ten'
import hb_eleven from '@/components/housebuy/hb_eleven'
import hb_twelve from '@/components/housebuy/hb_twelve'
import hb_thirteen from '@/components/housebuy/hb_thirteen'
import hb_fourteen from '@/components/housebuy/hb_fourteen'

//股权转让合同纠纷
import gq_one from '@/components/guquan/gq_one'
import gq_two from '@/components/guquan/gq_two'
import gq_three from '@/components/guquan/gq_three'
import gq_four from '@/components/guquan/gq_four'
import gq_five from '@/components/guquan/gq_five'
import gq_six from '@/components/guquan/gq_six'
import gq_seven from '@/components/guquan/gq_seven'
import gq_eight from '@/components/guquan/gq_eight'
import gq_nine from '@/components/guquan/gq_nine'
import gq_ten from '@/components/guquan/gq_ten'
import gq_eleven from '@/components/guquan/gq_eleven'
import gq_twelve from '@/components/guquan/gq_twelve'
import gq_thirteen from '@/components/guquan/gq_thirteen'
import gq_fourteen from '@/components/guquan/gq_fourteen'
import gq_fifteen from '@/components/guquan/gq_fifteen'
import gq_sixteen from '@/components/guquan/gq_sixteen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/zl_one',
      name:'zl_one',
      component:zl_one,
    },
    {
      path:'/zl_two',
      name:'zl_two',
      component:zl_two,
    },
    {
      path:'/zl_three',
      name:'zl_three',
      component:zl_three
    },
    {
      path:'/zl_four',
      name:'zl_four',
      component:zl_four
    },
    {
      path:'/zl_five',
      name:'zl_five',
      component:zl_five
    },
    {
      path:'/zl_six',
      name:'zl_six',
      component:zl_six
    },
    {
      path:'/zl_seven',
      name:'zl_seven',
      component:zl_seven
    },
    {
      path:'/zl_eight',
      name:'zl_eight',
      component:zl_eight
    },
    {
      path:'/zl_nine',
      name:'zl_nine',
      component:zl_nine
    },
    {
      path:'/zl_ten',
      name:'zl_ten',
      component:zl_ten
    },
    {
      path:'/zl_eleven',
      name:'zl_eleven',
      component:zl_eleven
    },
    {
      path:'/zl_twelve',
      name:'zl_twelve',
      component:zl_twelve
    },
    {
      path:'/zl_thirteen',
      name:'zl_thirteen',
      component:zl_thirteen
    },
    {
      path:'/zl_fourteen',
      name:'zl_fourteen',
      component:zl_fourteen
    },
    {
      path:'/hy_one',
      name:'hy_one',
      component:hy_one
    },
    {
      path:'/hy_two',
      name:'hy_two',
      component:hy_two
    },
    {
      path:'/hy_three',
      name:'hy_three',
      component:hy_three
    },
    {
      path:'/hy_four',
      name:'hy_four',
      component:hy_four
    },
    {
      path:'/hy_five',
      name:'hy_five',
      component:hy_five
    },
    {
      path:'/hy_six',
      name:'hy_six',
      component:hy_six
    },
    {
      path:'/hy_seven',
      name:'hy_seven',
      component:hy_seven
    },
    {
      path:'/hy_eight',
      name:'hy_eight',
      component:hy_eight
    },
    {
      path:'/hy_nine',
      name:'hy_nine',
      component:hy_nine
    },
    {
      path:'/hy_ten',
      name:'hy_ten',
      component:hy_ten
    },
    {
      path:'/hy_eleven',
      name:'hy_eleven',
      component:hy_eleven
    },
    {
      path:'/hy_twelve',
      name:'hy_twelve',
      component:hy_twelve
    },
    {
      path:'/hy_thirteen',
      name:'hy_thirteen',
      component:hy_thirteen
    },
    {
      path:'/hy_fourteen',
      name:'hy_fourteen',
      component:hy_fourteen
    },
    {
      path:'/hy_fifteen',
      name:'hy_fifteen',
      component:hy_fifteen
    },
    {
      path:'/hy_sixteen',
      name:'hy_sixteen',
      component:hy_sixteen
    },
    {
      path:'/hy_seventeen',
      name:'hy_seventeen',
      component:hy_seventeen
    },
    {
      path:'/hy_eighteen',
      name:'hy_eighteen',
      component:hy_eighteen
    },
    {
      path:'/hy_nineteen',
      name:'hy_nineteen',
      component:hy_nineteen
    },
    {
      path:'/ld_one',
      name:'ld_one',
      component:ld_one
    },
    {
      path:'/ld_two',
      name:'ld_two',
      component:ld_two
    },
    {
      path:'/ld_three',
      name:'ld_three',
      component:ld_three
    },
    {
      path:'/ld_four',
      name:'ld_four',
      component:ld_four
    },
    {
      path:'/ld_five',
      name:'ld_five',
      component:ld_five
    },
    {
      path:'/ld_six',
      name:'ld_six',
      component:ld_six
    },
    {
      path:'/ld_seven',
      name:'ld_seven',
      component:ld_seven
    },
    {
      path:'/ld_eight',
      name:'ld_eight',
      component:ld_eight
    },
    {
      path:'/ld_nine',
      name:'ld_nine',
      component:ld_nine
    },
    {
      path:'/ld_ten',
      name:'ld_ten',
      component:ld_ten
    },
    {
      path:'/ld_eleven',
      name:'ld_eleven',
      component:ld_eleven
    },
    {
      path:'/ld_twelve',
      name:'ld_twelve',
      component:ld_twelve
    },
    {
      path:'/ld_thirteen',
      name:'ld_thirteen',
      component:ld_thirteen
    },
    {
      path:'/ld_fourteen',
      name:'ld_fourteen',
      component:ld_fourteen
    },
    {
      path:'/ld_fifteen',
      name:'ld_fifteen',
      component:ld_fifteen
    },
    {
      path:'/ld_sixteen',
      name:'ld_sixteen',
      component:ld_sixteen
    },
    {
      path:'/ld_seventeen',
      name:'ld_seventeen',
      component:ld_seventeen
    },
    {
      path:'/ld_eighteen',
      name:'ld_eighteen',
      component:ld_eighteen
    },
    {
      path:'/ld_nineteen',
      name:'ld_nineteen',
      component:ld_nineteen
    },
    {
      path:'/bx_one',
      name:'bx_one',
      component:bx_one
    },
    {
      path:'/bx_two',
      name:'bx_two',
      component:bx_two
    },
    {
      path:'/bx_three',
      name:'bx_three',
      component:bx_three
    },
    {
      path:'/bx_four',
      name:'bx_four',
      component:bx_four
    },
    {
      path:'/bx_five',
      name:'bx_five',
      component:bx_five
    },
    {
      path:'/bx_six',
      name:'bx_six',
      component:bx_six
    },
    {
      path:'/bx_seven',
      name:'bx_seven',
      component:bx_seven
    },
    {
      path:'/bx_eight',
      name:'bx_eight',
      component:bx_eight
    },
    {
      path:'/bx_nine',
      name:'bx_nine',
      component:bx_nine
    },
    {
      path:'/bx_ten',
      name:'bx_ten',
      component:bx_ten
    },
    {
      path:'/bx_eleven',
      name:'bx_eleven',
      component:bx_eleven
    },
    {
      path:'/bx_twelve',
      name:'bx_twelve',
      component:bx_twelve
    },
    {
      path:'/bx_thirteen',
      name:'bx_thirteen',
      component:bx_thirteen
    },
    {
      path:'/db_one',
      name:'db_one',
      component:db_one
    },
    {
      path:'/db_two',
      name:'db_two',
      component:db_two
    },
    {
      path:'/db_three',
      name:'db_three',
      component:db_three
    },
    {
      path:'/db_four',
      name:'db_four',
      component:db_four
    },
    {
      path:'/db_five',
      name:'db_five',
      component:db_five
    },
    {
      path:'/db_six',
      name:'db_six',
      component:db_six
    },
    {
      path:'/db_seven',
      name:'db_seven',
      component:db_seven
    },
    {
      path:'/db_eight',
      name:'db_eight',
      component:db_eight
    },
    {
      path:'/db_nine',
      name:'db_nine',
      component:db_nine
    },
    {
      path:'/db_ten',
      name:'db_ten',
      component:db_ten
    },
    {
      path:'/db_eleven',
      name:'db_eleven',
      component:db_eleven
    },
    {
      path:'/db_twelve',
      name:'db_twelve',
      component:db_twelve
    },
    {
      path:'/db_thirteen',
      name:'db_thirteen',
      component:db_thirteen
    },
    {
      path:'/db_fourteen',
      name:'db_fourteen',
      component:db_fourteen
    },
    {
      path:'/mm_one',
      name:'mm_one',
      component:mm_one
    },
    {
      path:'/mm_two',
      name:'mm_two',
      component:mm_two
    },
    {
      path:'/mm_three',
      name:'mm_three',
      component:mm_three
    },
    {
      path:'/mm_four',
      name:'mm_four',
      component:mm_four
    },
    {
      path:'/mm_five',
      name:'mm_five',
      component:mm_five
    },
    {
      path:'/mm_six',
      name:'mm_six',
      component:mm_six
    },
    {
      path:'/mm_seven',
      name:'mm_seven',
      component:mm_seven
    },
    {
      path:'/mm_eight',
      name:'mm_eight',
      component:mm_eight
    },
    {
      path:'/mm_nine',
      name:'mm_nine',
      component:mm_nine
    },
    {
      path:'/mm_ten',
      name:'mm_ten',
      component:mm_ten
    },
    {
      path:'/mm_eleven',
      name:'mm_eleven',
      component:mm_eleven
    },
    {
      path:'/mm_twelve',
      name:'mm_twelve',
      component:mm_twelve
    },
    {
      path:'/mm_thirteen',
      name:'mm_thirteen',
      component:mm_thirteen
    },
    {
      path:'/jd_one',
      name:'jd_one',
      component:jd_one
    },
    {
      path:'/jd_two',
      name:'jd_two',
      component:jd_two
    },
    {
      path:'/jd_three',
      name:'jd_three',
      component:jd_three
    },
    {
      path:'/jd_four',
      name:'jd_four',
      component:jd_four
    },
    {
      path:'/jd_five',
      name:'jd_five',
      component:jd_five
    },
    {
      path:'/jd_six',
      name:'jd_six',
      component:jd_six
    },
    {
      path:'/jd_seven',
      name:'jd_seven',
      component:jd_seven
    },
    {
      path:'/jd_eight',
      name:'jd_eight',
      component:jd_eight
    },
    {
      path:'/jd_nine',
      name:'jd_nine',
      component:jd_nine
    },
    {
      path:'/jd_ten',
      name:'jd_ten',
      component:jd_ten
    },
    {
      path:'/jd_eleven',
      name:'jd_eleven',
      component:jd_eleven
    },
    {
      path:'/jd_twelve',
      name:'jd_twelve',
      component:jd_twelve
    },
    {
      path:'/jd_thirteen',
      name:'jd_thirteen',
      component:jd_thirteen
    },
    {
      path:'/jd_fourteen',
      name:'jd_fourteen',
      component:jd_fourteen
    },
    {
      path:'/jd_fifteen',
      name:'jd_fifteen',
      component:jd_fifteen
    },
    {
      path:'/td_one',
      name:'td_one',
      component:td_one
    },
    {
      path:'/td_two',
      name:'td_two',
      component:td_two
    },
    {
      path:'/td_three',
      name:'td_three',
      component:td_three
    },
    {
      path:'/td_four',
      name:'td_four',
      component:td_four
    },
    {
      path:'/td_five',
      name:'td_five',
      component:td_five
    },
    {
      path:'/td_six',
      name:'td_six',
      component:td_six
    },
    {
      path:'/td_seven',
      name:'td_seven',
      component:td_seven
    },
    {
      path:'/td_eight',
      name:'td_eight',
      component:td_eight
    },
    {
      path:'/td_nine',
      name:'td_nine',
      component:td_nine
    },
    {
      path:'/td_ten',
      name:'td_ten',
      component:td_ten
    },
    {
      path:'/td_eleven',
      name:'td_eleven',
      component:td_eleven
    },
    {
      path:'/td_twelve',
      name:'td_twelve',
      component:td_twelve
    },
    {
      path:'/td_thirteen',
      name:'td_thirteen',
      component:td_thirteen
    },
    {
      path:'/jz_one',
      name:'jz_one',
      component:jz_one
    },
    {
      path:'/jz_two',
      name:'jz_two',
      component:jz_two
    },
    {
      path:'/jz_three',
      name:'jz_three',
      component:jz_three
    },
    {
      path:'/jz_four',
      name:'jz_four',
      component:jz_four
    },
    {
      path:'/jz_five',
      name:'jz_five',
      component:jz_five
    },
    {
      path:'/jz_six',
      name:'jz_six',
      component:jz_six
    },
    {
      path:'/jz_seven',
      name:'jz_seven',
      component:jz_seven
    },
    {
      path:'/jz_eight',
      name:'jz_eight',
      component:jz_eight
    },
    {
      path:'/jz_nine',
      name:'jz_nine',
      component:jz_nine
    },
    {
      path:'/jz_ten',
      name:'jz_ten',
      component:jz_ten
    },
    {
      path:'/jz_eleven',
      name:'jz_eleven',
      component:jz_eleven
    },
    {
      path:'/jz_twelve',
      name:'jz_twelve',
      component:jz_twelve
    },
    {
      path:'/jz_thirteen',
      name:'jz_thirteen',
      component:jz_thirteen
    },
    {
      path:'/jt_one',
      name:'jt_one',
      component:jt_one
    },
    {
      path:'/jt_two',
      name:'jt_two',
      component:jt_two
    },
    {
      path:'/jt_three',
      name:'jt_three',
      component:jt_three
    },
    {
      path:'/jt_four',
      name:'jt_four',
      component:jt_four
    },
    {
      path:'/jt_five',
      name:'jt_five',
      component:jt_five
    },
    {
      path:'/jt_six',
      name:'jt_six',
      component:jt_six
    },
    {
      path:'/jt_seven',
      name:'jt_seven',
      component:jt_seven
    },
    {
      path:'/jt_eight',
      name:'jt_eight',
      component:jt_eight
    },
    {
      path:'/jt_nine',
      name:'jt_nine',
      component:jt_nine
    },
    {
      path:'/jt_ten',
      name:'jt_ten',
      component:jt_ten
    },
    {
      path:'/jt_eleven',
      name:'jt_eleven',
      component:jt_eleven
    },
    {
      path:'/jt_twelve',
      name:'jt_twelve',
      component:jt_twelve
    },
    {
      path:'/jt_thirteen',
      name:'jt_thirteen',
      component:jt_thirteen
    },
    {
      path:'/jt_fourteen',
      name:'jt_fourteen',
      component:jt_fourteen
    },
    {
      path:'/jr_one',
      name:'jr_one',
      component:jr_one
    },
    {
      path:'/jr_two',
      name:'jr_two',
      component:jr_two
    },
    {
      path:'/jr_three',
      name:'jr_three',
      component:jr_three
    },
    {
      path:'/jr_four',
      name:'jr_four',
      component:jr_four
    },
    {
      path:'/jr_five',
      name:'jr_five',
      component:jr_five
    },
    {
      path:'/jr_six',
      name:'jr_six',
      component:jr_six
    },
    {
      path:'/jr_seven',
      name:'jr_seven',
      component:jr_seven
    },
    {
      path:'/jr_eight',
      name:'jr_eight',
      component:jr_eight
    },
    {
      path:'/jr_nine',
      name:'jr_nine',
      component:jr_nine
    },
    {
      path:'/jr_ten',
      name:'jr_ten',
      component:jr_ten
    },
    {
      path:'/jr_eleven',
      name:'jr_eleven',
      component:jr_eleven
    },
    {
      path:'/jr_twelve',
      name:'jr_twelve',
      component:jr_twelve
    },
    {
      path:'/jr_thirteen',
      name:'jr_thirteen',
      component:jr_thirteen
    },
    {
      path:'/jr_fourteen',
      name:'jr_fourteen',
      component:jr_fourteen
    },
    {
      path:'/sh_one',
      name:'sh_one',
      component:sh_one
    },
    {
      path:'/sh_two',
      name:'sh_two',
      component:sh_two
    },
    {
      path:'/sh_three',
      name:'sh_three',
      component:sh_three
    },
    {
      path:'/sh_four',
      name:'sh_four',
      component:sh_four
    },
    {
      path:'/sh_five',
      name:'sh_five',
      component:sh_five
    },
    {
      path:'/sh_six',
      name:'sh_six',
      component:sh_six
    },
    {
      path:'/sh_seven',
      name:'sh_seven',
      component:sh_seven
    },
    {
      path:'/sh_eight',
      name:'sh_eight',
      component:sh_eight
    },
    {
      path:'/sh_nine',
      name:'sh_nine',
      component:sh_nine
    },
    {
      path:'/sh_ten',
      name:'sh_ten',
      component:sh_ten
    },
    {
      path:'/sh_eleven',
      name:'sh_eleven',
      component:sh_eleven
    },
    {
      path:'/sh_twelve',
      name:'sh_twelve',
      component:sh_twelve
    },
    {
      path:'/sh_thirteen',
      name:'sh_thirteen',
      component:sh_thirteen
    },
    {
      path:'/fy_one',
      name:'fy_one',
      component:fy_one
    },
    {
      path:'/fy_two',
      name:'fy_two',
      component:fy_two
    },
    {
      path:'/fy_three',
      name:'fy_three',
      component:fy_three
    },
    {
      path:'/fy_four',
      name:'fy_four',
      component:fy_four
    },
    {
      path:'/fy_five',
      name:'fy_five',
      component:fy_five
    },
    {
      path:'/fy_six',
      name:'fy_six',
      component:fy_six
    },
    {
      path:'/fy_seven',
      name:'fy_seven',
      component:fy_seven
    },
    {
      path:'/fy_eight',
      name:'fy_eight',
      component:fy_eight
    },
    {
      path:'/fy_nine',
      name:'fy_nine',
      component:fy_nine
    },
    {
      path:'/fy_ten',
      name:'fy_ten',
      component:fy_ten
    },
    {
      path:'/fy_eleven',
      name:'fy_eleven',
      component:fy_eleven
    },
    {
      path:'/fy_twelve',
      name:'fy_twelve',
      component:fy_twelve
    },
    {
      path:'/fs_one',
      name:'fs_one',
      component:fs_one
    },
    {
      path:'/fs_two',
      name:'fs_two',
      component:fs_two
    },
    {
      path:'/fs_three',
      name:'fs_three',
      component:fs_three
    },
    {
      path:'/fs_four',
      name:'fs_four',
      component:fs_four
    },
    {
      path:'/fs_five',
      name:'fs_five',
      component:fs_five
    },
    {
      path:'/fx_one',
      name:'fx_one',
      component:fx_one
    },
    {
      path:'/fx_two',
      name:'fx_two',
      component:fx_two
    },
    {
      path:'/fx_three',
      name:'fx_three',
      component:fx_three
    },
    {
      path:'/fx_four',
      name:'fx_four',
      component:fx_four
    },
    {
      path:'/fx_five',
      name:'fx_five',
      component:fx_five
    },
    {
      path:'/fx_six',
      name:'fx_six',
      component:fx_six
    },
    {
      path:'/fx_seven',
      name:'fx_seven',
      component:fx_seven
    },
    {
      path:'/fx_eight',
      name:'fx_eight',
      component:fx_eight
    },
    {
      path:'/fx_nine',
      name:'fx_nine',
      component:fx_nine
    },
    {
      path:'/fx_ten',
      name:'fx_ten',
      component:fx_ten
    },
    {
      path:'/fx_eleven',
      name:'fx_eleven',
      component:fx_eleven
    },
    {
      path:'/fx_twelve',
      name:'fx_twelve',
      component:fx_twelve
    },
    {
      path:'/pg_one',
      name:'pg_one',
      component:pg_one
    },
    {
      path:'/pg_two',
      name:'pg_two',
      component:pg_two
    },
    {
      path:'/pg_three',
      name:'pg_three',
      component:pg_three
    },
    {
      path:'/pg_four',
      name:'pg_four',
      component:pg_four
    },
    {
      path:'/pg_five',
      name:'pg_five',
      component:pg_five
    },
    {
      path:'/pg_six',
      name:'pg_six',
      component:pg_six
    },
    {
      path:'/pg_seven',
      name:'pg_seven',
      component:pg_seven
    },
    {
      path:'/pg_eight',
      name:'pg_eight',
      component:pg_eight
    },
    {
      path:'/pg_nine',
      name:'pg_nine',
      component:pg_nine
    },
    {
      path:'/pg_ten',
      name:'pg_ten',
      component:pg_ten
    },
    {
      path:'/cq_one',
      name:'cq_one',
      component:cq_one
    },
    {
      path:'/cq_two',
      name:'cq_two',
      component:cq_two
    },
    {
      path:'/cq_three',
      name:'cq_three',
      component:cq_three
    },
    {
      path:'/cq_four',
      name:'cq_four',
      component:cq_four
    },
    {
      path:'/cq_five',
      name:'cq_five',
      component:cq_five
    },
    {
      path:'/cq_six',
      name:'cq_six',
      component:cq_six
    },
    {
      path:'/cq_seven',
      name:'cq_seven',
      component:cq_seven
    },
    {
      path:'/cq_eight',
      name:'cq_eight',
      component:cq_eight
    },
    {
      path:'/cq_nine',
      name:'cq_nine',
      component:cq_nine
    },
    {
      path:'/cq_ten',
      name:'cq_ten',
      component:cq_ten
    },
    {
      path:'/cq_eleven',
      name:'cq_eleven',
      component:cq_eleven
    },
    {
      path:'/cq_twelve',
      name:'cq_twelve',
      component:cq_twelve
    },
    {
      path:'/cq_thirteen',
      name:'cq_thirteen',
      component:cq_thirteen
    },
    {
      path:'/cq_fourteen',
      name:'cq_fourteen',
      component:cq_fourteen
    },
    {
      path:'/cq_fifteen',
      name:'cq_fifteen',
      component:cq_fifteen
    },
    {
      path:'/hb_one',
      name:'hb_one',
      component:hb_one
    },
    {
      path:'/hb_two',
      name:'hb_two',
      component:hb_two
    },
    {
      path:'/hb_three',
      name:'hb_three',
      component:hb_three
    },
    {
      path:'/hb_four',
      name:'hb_four',
      component:hb_four
    },
    {
      path:'/hb_five',
      name:'hb_five',
      component:hb_five
    },
    {
      path:'/hb_six',
      name:'hb_six',
      component:hb_six
    },
    {
      path:'/hb_seven',
      name:'hb_seven',
      component:hb_seven
    },
    {
      path:'/hb_eight',
      name:'hb_eight',
      component:hb_eight
    },
    {
      path:'/hb_nine',
      name:'hb_nine',
      component:hb_nine
    },
    {
      path:'/hb_ten',
      name:'hb_ten',
      component:hb_ten
    },
    {
      path:'/hb_eleven',
      name:'hb_eleven',
      component:hb_eleven
    },
    {
      path:'/hb_twelve',
      name:'hb_twelve',
      component:hb_twelve
    },
    {
      path:'/hb_thirteen',
      name:'hb_thirteen',
      component:hb_thirteen
    },
    {
      path:'/hb_fourteen',
      name:'hb_fourteen',
      component:hb_fourteen
    },
    {
      path:'/gq_one',
      name:'gq_one',
      component:gq_one
    },
    {
      path:'/gq_two',
      name:'gq_two',
      component:gq_two
    },
    {
      path:'/gq_three',
      name:'gq_three',
      component:gq_three
    },
    {
      path:'/gq_four',
      name:'gq_four',
      component:gq_four
    },
    {
      path:'/gq_five',
      name:'gq_five',
      component:gq_five
    },
    {
      path:'/gq_six',
      name:'gq_six',
      component:gq_six
    },
    {
      path:'/gq_seven',
      name:'gq_seven',
      component:gq_seven
    },
    {
      path:'/gq_eight',
      name:'gq_eight',
      component:gq_eight
    },
    {
      path:'/gq_nine',
      name:'gq_nine',
      component:gq_nine
    },
    {
      path:'/gq_ten',
      name:'gq_ten',
      component:gq_ten
    },
    {
      path:'/gq_eleven',
      name:'gq_eleven',
      component:gq_eleven
    },
    {
      path:'/gq_twelve',
      name:'gq_twelve',
      component:gq_twelve
    },
    {
      path:'/gq_thirteen',
      name:'gq_thirteen',
      component:gq_thirteen
    },
    {
      path:'/gq_fourteen',
      name:'gq_fourteen',
      component:gq_fourteen
    },
    {
      path:'/gq_fifteen',
      name:'gq_fifteen',
      component:gq_fifteen
    },
    {
      path:'/gq_sixteen',
      name:'gq_sixteen',
      component:gq_sixteen
    },
    
  ]
})
