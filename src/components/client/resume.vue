<template>
  <div class="resume">
    <section class="left-block">
      <section class="header">
        <h1 class="name">{{ name }}</h1>
        <section class="job-info">
          <div v-for="(info, index) in jobInfo" :key="index">
            <span>{{ info.label }}</span>：<span>{{ info.value }}</span>
          </div>
        </section>
      </section>
      <div>
        <div class="list" v-for="(item, index) in timeList" :key="index">
          <div class="title" :content="item.icon">{{ item.name }}</div>
          <time-line :data="item.list"></time-line>
        </div>
      </div>
    </section>
    <section class="right-block">
        <section class="person-info">
          <div class="person-info-item" v-for="(info, index) in personInfo" :key="index" :content="info.icon">
            {{ info.label }}: {{ info.value }}
          </div>
        </section>
        <div class="other">
          <div>
            <div class="title" :content="`\ue604`">专业技能</div>
            <div class="other-list">
              <my-progress v-for="(item, index) in skill" :key="index" :value="item.percent" :name="item.name"></my-progress>
            </div>
          </div>
          <div>
            <div class="title" :content="`\ue623`">语言技能</div>
            <div class="other-list point-style-list">
              <p v-for="(item, index) in language" :key="index">{{ item }}</p>
            </div>
          </div>
          <div>
            <div class="title" :content="`\ue649`">兴趣爱好</div>
            <div class="other-list block-style-list">
              <span class="hobby" v-for="(item, index) in hobby" :key="index" :content="item.icon">
                {{ item.name }}
              </span>
            </div>
          </div>
          <div>
            <div class="title" :content="`\ue65d`">自我评价</div>
            <div class="other-list point-style-list">
              <p v-for="(item, index) in assessment" :key="index">{{ item }}</p>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>
<script>
import timeLine from './timeline'
import progress from './progress'

export default {
  name: 'resume',
  props: {
    config: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      ...this.config
    }
  },
  components: {
    timeLine,
    myProgress: progress
  }
}
</script>
<style lang="scss">
  .resume {
    max-width: 960px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,.09);
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .left-block {
      flex: 6;
      max-width: 580px;
    }
    .right-block {
      flex: 3;
      max-width: 280px;
      box-sizing: border-box;
      padding-right: 20px;
      margin-left: 60px;
    }
    .content {
      margin-top: 20px;
    }
    .header {
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
  @media screen and (max-width: 580px) {
    .resume {
      .left-block {
        flex: none;
        width: 100%;
      }
      .right-block {
        flex: none;
        width: 100%;
      }
    }
  }
</style>

