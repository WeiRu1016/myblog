<template>
  <div class="time-line">
    <div v-for="(item, index) in data" :key="index" class="time-line-item">
      <div class="degree-block">
        <span>{{ item.startTime | formatTime }}--{{ item.endTime | formatTime }}</span>
        <span class="degree-block-info">
          <span v-if="item.degree">{{ item.degree }}</span>
          <span v-if="item.post">{{ item.post }}</span>
          <span v-if="item.block">{{ item.block }}</span>
        </span>
      </div>
      <div class="desc" v-if="isArray(item.desc)">
        <div class="desc-list" v-for="(desc, index) in item.desc" :key="index">
          <span class="desc-label">{{ desc.label }}</span>：
          <span class="desc-value" v-if="isArray(desc.value)">
            <span v-for="(value, index) in desc.value" :key="index" class="desc-value-item">
              {{ value }}
            </span>
          </span>
          <span v-else class="desc-value">{{ desc.value }}</span>
        </div>
      </div>
      <div class="desc" v-else>
        {{ item.desc }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'timeline',
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    methods: {
      isArray (value) {
        return Array.isArray(value)
      }
    },
    filters: {
      formatTime (date) {
        if (typeof date === 'string') {
          return date
        }
        const format = (num) => num > 9 ? num : `0${num}`
        const year = format(date.getFullYear())
        const month = format(date.getMonth() + 1)
        return [year, month].join('.')
      }
    }
  }
</script>
<style lang="scss">
  .time-line {
    margin-left: 50px;
    padding-top: 20px;
    .time-line-item {
      text-align: left;
      line-height: 2em;
      padding-bottom: 20px;
      position: relative;
      &::before {
        content: '';
        display: inline-block;
        height: 10px;
        width: 10px;
        border-radius: 100%;
        background: #465364;
        position: absolute;
        top: 10px;
        left: -20px;
      }
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 20px;
        bottom: -10px;
        left: -15px;
        width: 1px;
        background: #465364;
      }
    }
    .degree-block {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 18px;
      font-weight: 600;
      &-info {
        display: flex;
        > span {
          margin-right: 10px;
        }
      }
    }
    .desc-list {
      .desc-label {
        font-weight: 700;
      }
      .desc-value-item {
        display: block;
        line-height: 1.6;
        &::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 100%;
          background: #465364;
          margin-right: 5px;
        }
      }
    }
  }
</style>

