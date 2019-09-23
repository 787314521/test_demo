<template>
  <div class="box">
    <Banner></Banner>
    <Product></Product>
    <Solution></Solution>
    <Cases></Cases>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from './banner'
import Product from './product'
import Solution from './solution'
import Cases from './cases'
import Footer from './footer'
export default {
  methods:{},
  components:{Banner,Product,Solution,Cases,Footer}
}
</script>

<style lang="less" scoped>
  .box{
    width: 1920px;
    // background-color: #ccc;
  }
</style>