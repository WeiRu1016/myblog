<template>
  <header id="my-header">
    <h1 class="my-icon f-left">BaoMax&nbsp;<small>的博客</small></h1>
    <nav class="link-nav f-right">
      <ul class="link-list">
        <li class="link-list-item">
          <router-link to="/client/index">文章</router-link>
        </li>
        <li class="link-list-item">
          <router-link to="/client/leetcode">leetcode</router-link>
        </li>
        <li class="link-list-item">
          <router-link to="/client/about">关于我</router-link>
        </li>
      </ul>
      <div class="nav-menu" @click="showCollpase">&#xe745;</div>
    </nav>
    <aside class="nav-link-aside" :class="{open:open}">
        <ul class="nav-aside-list">
          <li class="link-list-item">
            <router-link to="/client/index">文章</router-link>
          </li>
          <li class="link-list-item">
            <router-link to="/client/leetcode">leetcode</router-link>
          </li>
          <li class="link-list-item">
            <router-link to="/client/about">关于我</router-link>
          </li>
        </ul>
    </aside>
  </header>
</template>
<script>
  export default {
    name: 'myHeader',
    data () {
      return {
        open: false
      }
    },
    methods: {
      showCollpase () {
        this.open = !this.open
      }
    }
  }
</script>
<style lang="scss">
  $height: 40px;// 高度
  $h1-fontsize: 26px;// h1字体大小
  $theme-color: #ec7259;// 主题颜色
  $padding: 10px;

  #my-header{
    padding: $padding 15%;
    background: #fff;
    height: $height;
    border-bottom: 1px solid #ddd;
    box-shadow: 0px 1px 1px rgba(221, 221, 221, 0.7);
    text-align: left;
    overflow: hidden;
    .my-icon {
      font-size: $h1-fontsize;
      line-height: $height;
      font-weight: 600;
      color: $theme-color;
      display: inline-block;
      vertical-align: middle;
      small {
        font-size: 18px;
      }
    }
    .link-list-item{
      transition: border ease-in .3s;
      cursor: pointer;
      &:hover,&.selected{
        border-bottom: 3px solid $theme-color;
      }
      a {
        color: #2c3e50;
      }
    }
    .link-nav{
      display: inline-block;
      vertical-align: middle;
      height: $height;
      overflow: hidden;
      .link-list{
        display: inline;
      }
      .link-list-item {
        display: inline-block;
        line-height: ($height - 5);
        margin: 0px 5px;
        box-sizing: border-box;
        transition: border ease-in .3;
        cursor: pointer;
      }
      .link-list-item:hover{
        border-bottom: 3px solid $theme-color;
      }
      .nav-menu{
        display: none;
        font-family: 'iconfont';
      }
    }
    .nav-link-aside{
      width: 180px;
      height: 100%;
      background: #ddd;
      position: fixed;
      top: ($height + $padding*2);
      bottom: 0;
      right: 0;
      transform: translateX(100%);
      transition: all ease-in .3s;
      &.open{
        transform: translateX(0);
      }
      .nav-aside-list{
        padding: 10px 10px;
        .link-list-item{
          line-height: 2;
          font-size: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    #my-header{
      padding: $padding;
      .link-nav{
        .link-list{
          display: none;
        }
        .nav-menu{
          display: inline-block;
          width: $height;
          height: $height;
          line-height: $height;
          font-size: $h1-fontsize;
        }
      }
    }
  }
</style>
