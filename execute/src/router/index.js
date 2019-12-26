import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

import applyExecute from '@/components/applyExecute'
import passiveExecute from '@/components/passiveExecute'
import apply from '@/components/apply'
import passiveDetail from '@/components/passiveDetail'
import executeDetail from '@/components/executeDetail'

// 民事执行案件
import ms_one from '@/components/minshi/ms_one'
import ms_two from '@/components/minshi/ms_two'
import ms_three from '@/components/minshi/ms_three'
import ms_four from '@/components/minshi/ms_four'
import ms_five from '@/components/minshi/ms_five'
import ms_six from '@/components/minshi/ms_six'
import ms_seven from '@/components/minshi/ms_seven'
import ms_eight from '@/components/minshi/ms_eight'
import ms_nine from '@/components/minshi/ms_nine'
import ms_ten from '@/components/minshi/ms_ten'
import ms_eleven from '@/components/minshi/ms_eleven'
import ms_twelve from '@/components/minshi/ms_twelve'
import ms_thirteen from '@/components/minshi/ms_thirteen'
import ms_fourteen from '@/components/minshi/ms_fourteen'
import ms_fifteen from '@/components/minshi/ms_fifteen'
import ms_sixteen from '@/components/minshi/ms_sixteen'
import ms_seventeen from '@/components/minshi/ms_seventeen'

// 执行仲裁裁决
import zc_one from '@/components/zhongcai/zc_one'
import zc_two from '@/components/zhongcai/zc_two'
import zc_three from '@/components/zhongcai/zc_three'
import zc_four from '@/components/zhongcai/zc_four'
import zc_five from '@/components/zhongcai/zc_five'
import zc_six from '@/components/zhongcai/zc_six'
import zc_seven from '@/components/zhongcai/zc_seven'
import zc_eight from '@/components/zhongcai/zc_eight'
import zc_nine from '@/components/zhongcai/zc_nine'
import zc_ten from '@/components/zhongcai/zc_ten'
import zc_eleven from '@/components/zhongcai/zc_eleven'
import zc_twelve from '@/components/zhongcai/zc_twelve'
import zc_thirteen from '@/components/zhongcai/zc_thirteen'
import zc_fourteen from '@/components/zhongcai/zc_fourteen'
import zc_fifteen from '@/components/zhongcai/zc_fifteen'

// 执行公证债权文书
import gz_one from '@/components/gongzheng/gz_one'
import gz_two from '@/components/gongzheng/gz_two'
import gz_three from '@/components/gongzheng/gz_three'
import gz_four from '@/components/gongzheng/gz_four'
import gz_five from '@/components/gongzheng/gz_five'
import gz_six from '@/components/gongzheng/gz_six'
import gz_seven from '@/components/gongzheng/gz_seven'
import gz_eight from '@/components/gongzheng/gz_eight'
import gz_nine from '@/components/gongzheng/gz_nine'
import gz_ten from '@/components/gongzheng/gz_ten'
import gz_eleven from '@/components/gongzheng/gz_eleven'
import gz_twelve from '@/components/gongzheng/gz_twelve'
import gz_thirteen from '@/components/gongzheng/gz_thirteen'
import gz_fourteen from '@/components/gongzheng/gz_fourteen'

// 诉前保全
import sq_one from '@/components/suqian/sq_one'
import sq_two from '@/components/suqian/sq_two'
import sq_three from '@/components/suqian/sq_three'
import sq_four from '@/components/suqian/sq_four'
import sq_five from '@/components/suqian/sq_five'
import sq_six from '@/components/suqian/sq_six'
import sq_seven from '@/components/suqian/sq_seven'
import sq_eight from '@/components/suqian/sq_eight'
import sq_nine from '@/components/suqian/sq_nine'
import sq_ten from '@/components/suqian/sq_ten'
import sq_eleven from '@/components/suqian/sq_eleven'
import sq_twelve from '@/components/suqian/sq_twelve'

// 诉讼保全
import ss_one from '@/components/susong/ss_one'
import ss_two from '@/components/susong/ss_two'
import ss_three from '@/components/susong/ss_three'
import ss_four from '@/components/susong/ss_four'
import ss_five from '@/components/susong/ss_five'
import ss_six from '@/components/susong/ss_six'
import ss_seven from '@/components/susong/ss_seven'
import ss_eight from '@/components/susong/ss_eight'
import ss_nine from '@/components/susong/ss_nine'
import ss_ten from '@/components/susong/ss_ten'
import ss_eleven from '@/components/susong/ss_eleven'
import ss_twelve from '@/components/susong/ss_twelve'

// 先予执行
import xy_one from '@/components/xianyu/xy_one'
import xy_two from '@/components/xianyu/xy_two'
import xy_three from '@/components/xianyu/xy_three'
import xy_four from '@/components/xianyu/xy_four'
import xy_five from '@/components/xianyu/xy_five'
import xy_six from '@/components/xianyu/xy_six'
import xy_seven from '@/components/xianyu/xy_seven'
import xy_eight from '@/components/xianyu/xy_eight'
import xy_nine from '@/components/xianyu/xy_nine'
import xy_ten from '@/components/xianyu/xy_ten'
import xy_eleven from '@/components/xianyu/xy_eleven'
import xy_twelve from '@/components/xianyu/xy_twelve'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/applyExecute',
      name: 'applyExecute',
      component: applyExecute
    },
    {
      path: '/passiveExecute',
      name: 'passiveExecute',
      component: passiveExecute
    },
    {
      path: '/passiveDetail',
      name: 'passiveDetail',
      component: passiveDetail
    },
    {
      path: '/executeDetail',
      name: 'executeDetail',
      component: executeDetail
    },
    {
      path: '/apply',
      name: 'apply',
      component: apply
    },
    {
      path: '/ms_one',
      name: 'ms_one',
      component: ms_one
    },
    {
      path: '/ms_two',
      name: 'ms_two',
      component: ms_two
    },
    {
      path: '/ms_three',
      name: 'ms_three',
      component: ms_three
    },
    {
      path: '/ms_four',
      name: 'ms_four',
      component: ms_four
    },
    {
      path: '/ms_five',
      name: 'ms_five',
      component: ms_five
    },
    {
      path: '/ms_six',
      name: 'ms_six',
      component: ms_six
    },
    {
      path: '/ms_seven',
      name: 'ms_seven',
      component: ms_seven
    },
    {
      path: '/ms_eight',
      name: 'ms_eight',
      component: ms_eight
    },
    {
      path: '/ms_nine',
      name: 'ms_nine',
      component: ms_nine
    },
    {
      path: '/ms_ten',
      name: 'ms_ten',
      component: ms_ten
    },
    {
      path: '/ms_eleven',
      name: 'ms_eleven',
      component: ms_eleven
    },
    {
      path: '/ms_twelve',
      name: 'ms_twelve',
      component: ms_twelve
    },
    {
      path: '/ms_thirteen',
      name: 'ms_thirteen',
      component: ms_thirteen
    },
    {
      path: '/ms_fourteen',
      name: 'ms_fourteen',
      component: ms_fourteen
    },
    {
      path: '/ms_fifteen',
      name: 'ms_fifteen',
      component: ms_fifteen
    },
    {
      path: '/ms_sixteen',
      name: 'ms_sixteen',
      component: ms_sixteen
    },
    {
      path: '/ms_seventeen',
      name: 'ms_seventeen',
      component: ms_seventeen
    },
    {
      path: '/zc_one',
      name: 'zc_one',
      component: zc_one
    },
    {
      path: '/zc_two',
      name: 'zc_two',
      component: zc_two
    },
    {
      path: '/zc_three',
      name: 'zc_three',
      component: zc_three
    },
    {
      path: '/zc_four',
      name: 'zc_four',
      component: zc_four
    },
    {
      path: '/zc_five',
      name: 'zc_five',
      component: zc_five
    },
    {
      path: '/zc_six',
      name: 'zc_six',
      component: zc_six
    },
    {
      path: '/zc_seven',
      name: 'zc_seven',
      component: zc_seven
    },
    {
      path: '/zc_eight',
      name: 'zc_eight',
      component: zc_eight
    },
    {
      path: '/zc_nine',
      name: 'zc_nine',
      component: zc_nine
    },
    {
      path: '/zc_ten',
      name: 'zc_ten',
      component: zc_ten
    },
    {
      path: '/zc_eleven',
      name: 'zc_eleven',
      component: zc_eleven
    },
    {
      path: '/zc_twelve',
      name: 'zc_twelve',
      component: zc_twelve
    },
    {
      path: '/zc_thirteen',
      name: 'zc_thirteen',
      component: zc_thirteen
    },
    {
      path: '/zc_fourteen',
      name: 'zc_fourteen',
      component: zc_fourteen
    },
    {
      path: '/zc_fifteen',
      name: 'zc_fifteen',
      component: zc_fifteen
    },
    {
      path: '/gz_one',
      name: 'gz_one',
      component: gz_one
    },
    {
      path: '/gz_two',
      name: 'gz_two',
      component: gz_two
    },
    {
      path: '/gz_three',
      name: 'gz_three',
      component: gz_three
    },
    {
      path: '/gz_four',
      name: 'gz_four',
      component: gz_four
    },
    {
      path: '/gz_five',
      name: 'gz_five',
      component: gz_five
    },
    {
      path: '/gz_six',
      name: 'gz_six',
      component: gz_six
    },
    {
      path: '/gz_seven',
      name: 'gz_seven',
      component: gz_seven
    },
    {
      path: '/gz_eight',
      name: 'gz_eight',
      component: gz_eight
    },
    {
      path: '/gz_nine',
      name: 'gz_nine',
      component: gz_nine
    },
    {
      path: '/gz_ten',
      name: 'gz_ten',
      component: gz_ten
    },
    {
      path: '/gz_eleven',
      name: 'gz_eleven',
      component: gz_eleven
    },
    {
      path: '/gz_twelve',
      name: 'gz_twelve',
      component: gz_twelve
    },
    {
      path: '/gz_thirteen',
      name: 'gz_thirteen',
      component: gz_thirteen
    },
    {
      path: '/gz_fourteen',
      name: 'gz_fourteen',
      component: gz_fourteen
    },
    {
      path: '/sq_one',
      name: 'sq_one',
      component: sq_one
    },
    {
      path: '/sq_two',
      name: 'sq_two',
      component: sq_two
    },
    {
      path: '/sq_three',
      name: 'sq_three',
      component: sq_three
    },
    {
      path: '/sq_four',
      name: 'sq_four',
      component: sq_four
    },
    {
      path: '/sq_five',
      name: 'sq_five',
      component: sq_five
    },
    {
      path: '/sq_six',
      name: 'sq_six',
      component: sq_six
    },
    {
      path: '/sq_seven',
      name: 'sq_seven',
      component: sq_seven
    },
    {
      path: '/sq_eight',
      name: 'sq_eight',
      component: sq_eight
    },
    {
      path: '/sq_eight',
      name: 'sq_eight',
      component: sq_eight
    },
    {
      path: '/sq_nine',
      name: 'sq_nine',
      component: sq_nine
    },
    {
      path: '/sq_ten',
      name: 'sq_ten',
      component: sq_ten
    },
    {
      path: '/sq_eleven',
      name: 'sq_eleven',
      component: sq_eleven
    },
    {
      path: '/sq_twelve',
      name: 'sq_twelve',
      component: sq_twelve
    },
    {
      path: '/ss_one',
      name: 'ss_one',
      component: ss_one
    },
    {
      path: '/ss_two',
      name: 'ss_two',
      component: ss_two
    },
    {
      path: '/ss_three',
      name: 'ss_three',
      component: ss_three
    },
    {
      path: '/ss_four',
      name: 'ss_four',
      component: ss_four
    },
    {
      path: '/ss_five',
      name: 'ss_five',
      component: ss_five
    },
    {
      path: '/ss_six',
      name: 'ss_six',
      component: ss_six
    },
    {
      path: '/ss_seven',
      name: 'ss_seven',
      component: ss_seven
    },
    {
      path: '/ss_eight',
      name: 'ss_eight',
      component: ss_eight
    },
    {
      path: '/ss_nine',
      name: 'ss_nine',
      component: ss_nine
    },
    {
      path: '/ss_ten',
      name: 'ss_ten',
      component: ss_ten
    },
    {
      path: '/ss_eleven',
      name: 'ss_eleven',
      component: ss_eleven
    },
    {
      path: '/ss_twelve',
      name: 'ss_twelve',
      component: ss_twelve
    },
    {
      path: '/xy_one',
      name: 'xy_one',
      component: xy_one
    },
    {
      path: '/xy_two',
      name: 'xy_two',
      component: xy_two
    },
    {
      path: '/xy_three',
      name: 'xy_three',
      component: xy_three
    },
    {
      path: '/xy_four',
      name: 'xy_four',
      component: xy_four
    },
    {
      path: '/xy_five',
      name: 'xy_five',
      component: xy_five
    },
    {
      path: '/xy_six',
      name: 'xy_six',
      component: xy_six
    },
    {
      path: '/xy_seven',
      name: 'xy_seven',
      component: xy_seven
    },
    {
      path: '/xy_eight',
      name: 'xy_eight',
      component: xy_eight
    },
    {
      path: '/xy_nine',
      name: 'xy_nine',
      component: xy_nine
    },
    {
      path: '/xy_ten',
      name: 'xy_ten',
      component: xy_ten
    },
    {
      path: '/xy_eleven',
      name: 'xy_eleven',
      component: xy_eleven
    },
    {
      path: '/xy_twelve',
      name: 'xy_twelve',
      component: xy_twelve
    },
  ]
})
