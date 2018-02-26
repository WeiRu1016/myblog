<template>
  <div id="leftBar">
    <a class="icon add" @click="showToolgle">新建文集</a>
    <transition name="slide-toogle">
      <div v-if="add_show" class="add-group" @blur="showToolgle">
        <input class="add-input" type="text" v-model="addInputName" name="catagoryName" value="" placeholder="请输入文集名称" v-focus>
        <div class="btn-group">
          <a class="confirm" @click.prevent="addCatagory">提交</a>
          <a class="cancel" @click.prevent="showToolgle">取消</a>
        </div>
      </div>
    </transition>
    <ul class="catagory-list" v-if="catagoryList.length">
      <li v-for="item in catagoryList" is="list-item" :id="item._id" :selected="currentCatagory && (currentCatagory._id === item._id)" :item="item"></li>
    </ul>
    <div class="icon trash">回收站</div>
  </div>
</template>
<script>
  import listItem from './listItem'
  import { mapGetters } from 'vuex'
  export default {
    name: 'leftBar',
    data () {
      return {
        add_show: false,
        addInputName: ''
      }
    },
    components: {
      listItem
    },
    computed: {
      ...mapGetters({
        catagoryList: 'getCatagoryList'
      }),
      ...mapGetters({
        currentCatagory: 'getCurrentCatagory'
      })
    },
    methods: {
      showToolgle () {
        this.add_show = !this.add_show
      },
      async addCatagory () {
        if (!this.addInputName) {
          window.alert('请输入文集名称')
          return
        }
        let response = await fetch('/api/catagory/add', {
          method: 'post',
          body: `name=${this.addInputName}`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          credentials: 'include'
        })
        let data = await response.json()
        if (data.code === this.GLOBAL.STATUS.SUCCESS) {
          window.alert('添加成功')
          this.add_show = false
          this.$store.dispatch('refresh')
        } else {
          window.alert(data.msg)
          console.error(data.msg)
        }
      }
    }
  }
</script>
<style lang="scss">
  #leftBar{
    background: #3f3f3f;
    min-height: 200px;
    width: 20%;
    height: 100%;
    color: #fff;
    text-align: left;
    font-size: 14px;
    .add{
      margin-top: 50px;
      padding-top: 10px;
      padding-bottom: 10px;
      display: block;
      &::before{
        content: '\e622';
        font-size: 36px;
        vertical-align: sub;
      }
      &:hover{
        cursor: pointer;
      }
    }
    .trash{
      color: #969696;
      &::before{
        content: '\e69d';
        font-size: 36px;
        vertical-align: middle;
      }
    }
  }
  @media (max-width: 768px) {
    #leftBar{
      width: 100%;
      height: auto;
    }
  }
</style>
<style scoped lang="scss">
  .add-group.add_show{
    height: 100px;
  }
  .add-input{
    background: rgba(180,180,180,0.2);
    border: 1px solid #2f2f2f;
    color: #c5c5c5;
    border-radius: 5px;
    line-height: 30px;
    text-indent: 5px;
    width: 100%;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .add-group{
    height: 80px;
    overflow: hidden;
    margin: 10px;
    margin-top: 0px;
    .btn-group{
      margin-top: 20px;
      padding-bottom: 10px;
    }
    .confirm{
      border:1px solid #34ab20;
      border-radius: 20px;
      color: #34ab20;
      padding: 5px 20px;
      margin-right: 10px;
      &:hover{
        background: rgba(52,171,32,0.1);
        cursor: pointer;
      }
    }
    .cancel{
      color: #969696;
      &:hover{
        cursor: pointer;
        color: #fff;
      }
    }
  }
</style>
