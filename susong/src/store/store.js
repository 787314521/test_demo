import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let list = [];// new Array(12)
// list.length = 12;

const initList = () => {
    for(var i=0;i<18;i++){
        list.push({
            mark: i,
            value: ''
        })
    };
};
initList()
// list.forEach((v,i,arr) => {
//     v = {
//         mark: null,
//         value: ''
//     };
//     console.log(v)
// })
// console.log('list:',list)
// initial state
const state = {
    selectionsList: list,
    // pageList:[{
    //     title: '您所处的审判程序是？',
    //     type: 'radio',
    //     value: '',
    //     options: [{
    //         name: '一审',
    //         score: 8
    //     },{
    //         name: '二审',
    //         score: 7
    //     },{
    //         name: '再审',
    //         score: 6
    //     }]
    // },{
    //     title: '您是否委托诉讼代理人？',
    //     value: '',
    //     options: [{
    //         name: '委托',
    //         score: 3
    //     },{
    //         name: '没有委托',
    //         score: 10
    //     }]
    // }]
};
// const getters = {}

// const actions = {}

const mutations = {
    setSelections(state, opt){
        // console.log('opt:',opt)
        state.selectionsList[opt.mark].value = opt.value;
        console.log('state.selectionsList[opt.mark]:',state.selectionsList[opt.mark])
    },
    initPageList(state){
        // state.pageList.forEach(v=> v.value = '')
        state.selectionsList.forEach(v=> v.value = '')
    }
}
const store = new Vuex.Store({
    //   actions,
      state,
      mutations,
    })
export default store