<template>
    <div class="box">
        <dl class="dl-one">
            <dt>产品中心</dt>
            <dd v-for="item in center" :key="item.title">{{item.title}}</dd>
        </dl>

        <dl>
            <dt>解决方案</dt>
            <dd v-for="item in solution" :key="item.title">{{item.title}}</dd>
        </dl>

        <dl>
            <dt>联系我们</dt>
            <dd v-for="item in relation" :key="item.title">{{item.title}}</dd>
        </dl>
        <hr>
        <p>© 2017 Hefei Show Information Technology Co.,Ltd&nbsp;&nbsp;&nbsp;&nbsp;皖ICP备17021328号</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            center:[
                {
                    title:"多窗口大屏展示系统"
                },
                {
                    title:"会议纪要虚拟速记系统"
                },
                {
                    title:"党建系统"
                },
                {
                    title:"机器人软件（法院机器人软件、医院机器人软件）"
                },
                {
                    title:"智慧工厂多元信息可视化系统"
                },
                {
                    title:"其他小软件（电子签名、信息发布、触摸查询）"
                },
            ],
            solution:[
                {
                    title:"行业/社群"
                },
                {
                    title:"政府/机构"
                },
                {
                    title:"律师/律所"
                },
            ],
            relation:[
                {
                    title:"客服电话：0551-65178688（99）"
                },
                {
                    title:"商务合作"
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .box{
        position: relative;
        width: 100%;
        height: 313px;
        background-color: #232526;
        dl{
            float: left;
            margin-top: 35px;
            margin-right: 235px;
        }
        dt{
            margin-bottom: 25px;
            font-size: 16px;
            color: #fff;
        }
        dd{
            margin-bottom: 13px;
            font-size: 12px;
            color: #ccc;
        }
        .dl-one{
            margin-left: 455px;
        }
        hr{
            position: absolute;
            bottom: 36px;
            width: 100%;
            border: 1px solid #6d6d6d;
        }
        p{
            position: absolute;
            bottom: 10px;
            font-size: 12px;
            color: #fff;
            margin-left: 720px;
        }
    }
</style>