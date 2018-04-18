<template>
  <div>
    <resume v-if="!loading" :config="config"></resume>
  </div>
</template>
<script>
import resume from '../resume'

export default {
  name: 'about',
  data () {
    return {
      loading: true,
      config: {}
    }
  },
  mounted () {
    console.log('mounted', this)
    this.getData()
  },
  methods: {
    async getData () {
      console.log(this.$route.params)
      if (this.$route.params.name === 'weilai') {
        console.log('true')
        const data = await import('../../../assets/resume/weilai.js')
        console.log(data.default)
        this.config = {
          ...data.default
        }
      } else {
        console.log('false', this.config)
        const data = await import('../../../assets/resume/weiru.js')
        this.config = {
          ...data.default
        }
      }
      this.loading = false
      console.log('this.config', this.config)
    }
  },
  components: {
    resume
  }
}
</script>
<style lang="scss">
  .resume {
    width: 960px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,.09);
    margin: auto;
    .left-block {
      width: 60%;
      float: left;
      margin-right: 10%;
    }
    .right-block {
      width: 30%;
      float: right;
      box-sizing: border-box;
      padding-right: 20px;
    }
    .header {
      overflow: hidden;
      margin-bottom: 20px;
    }
    .header-left {
      height: 160px;
      background: #465364;
      color: #fff;
      padding: 20px;
      box-sizing: border-box;
      font-size: 18px;
      .name {
        font-size: 50px;
        color: #fff;
        padding: 20px;
      }
      .job-info {
        display: flex;
        justify-content: center;
        > div:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
    .person-info {
      > div {
        border-bottom: 1px solid rgba(0, 0, 0, .9);
        line-height: 36px;
        text-align: left;
        &::before {
          font-family: 'iconfont';
          content: attr(content);
          font-size: 20px;
        }
      }
    }
    .wrapper {
      overflow: hidden;
      width: 100%;
    }
    .title {
      line-height: 2em;
      border-bottom: 1px solid #000;
      position: relative;
      text-align: left;
      &::before {
        content: attr(content);
        font-family: 'iconfont';
        position: absolute;
      }
    }
    .list {
      .title {
        font-size: 30px;
        margin-left: 50px;
        &::before {
          font-size: 30px;
          top: 0px;
          left: -40px;
        }
      }
    }
    .other {
      &-list {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .title {
        font-size: 24px;
        &::before {
          font-size: 24px;
          top: 0;
          left: -30px;
        }
      }
    }
    .hobby {
      &::before {
        content: attr(content);
        font-family: 'iconfont';
        display: block;
        font-size: 40px;
        line-height: 2em;
      }
    }
    .point-style-list {
      line-height: 1.6em;
      text-align: left;
      p {
        margin: 4px auto;
      }
      p::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background: #465364;
        margin-right: 5px;
      }
    }
    .block-style-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>

