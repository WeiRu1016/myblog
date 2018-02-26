<template>
  <li :class="{selected:selected}" class="list-item list-item-default" @click.stop="setCurrentCatagory">
    <a href="javascript:void(0)" class="name">{{item.name}}</a>
    <a v-show="selected" class="setting" @click.prevent="ShowTips">&#xe6b5;</a>
    <div v-show="show && selected" class="tips" tabindex="-1" @blur.prevent.stop="ShowTips" ref="tips">
      <div>
        <a @click.prevent.stop="show_input" class="icon edit">修改文集名称</a>
      </div>
      <div>
        <a @click.prevent.stop="show_confirm" class="icon delete">删除文集</a>
      </div>
      <!--<a @clcik.prevent.stop="deleteCatagory" class="delete">删除文集</a>-->
    </div>
  </li>
</template>
<script>
  export default{
    name: 'list-item',
    props: {
      selected: {
        type: Boolean
      },
      item: {
        type: Object,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        show: false
      }
    },
    methods: {
      test (str) {
        window.alert(str)
      },
      setCurrentCatagory () {
        this.$store.dispatch('setCurrentCatagory', this.id)
      },
      ShowTips () {
        this.show = !this.show
        if (this.show) {
          this.$nextTick(() => {
            this.$refs.tips.focus()
          })
        }
      },
      show_input () {
        this.$prompt({
          title: '修改文集名称',
          value: this.item.name,
          id: 'myPrompt',
          successCB: this.changeName
        })
      },
      show_confirm () {
        this.$refs.tips.blur()
        this.$confirm({
          content: `确认删除文集${this.item.name}?`,
          id: 'myConfirm',
          successCB: this.deleteCatagory
        })
      },
      async deleteCatagory () {
        // 删除
        // window.alert('删除')
        let response = await fetch('/api/catagory/delete', {
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: `id=${this.id}`,
          credentials: 'include'
        })
        let data = await response.json()
        if (data.code === this.GLOBAL.STATUS.SUCCESS) {
          this.$store.dispatch('refresh')
          window.alert('删除成功')
        } else {
          window.alert(data.msg)
          console.log(data.msg)
        }
      },
      async changeName (name) {
        // 修改名字
        // window.alert('修改')
        let response = await fetch('/api/catagory/changeName', {
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: `name=${name}&id=${this.id}`,
          credentials: 'include'
        })
        let data = await response.json()
        if (data.code === this.GLOBAL.STATUS.SUCCESS) {
          this.$store.dispatch('getCatagorylist')
          window.alert('修改成功')
        } else {
          window.alert(data.msg)
          console.log(data.msg)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .list-item-default{
    &.selected{
      background-color: #646464;
    }
  }
  .edit::before{
    content: "\e626";
    font-size: 24px;
    vertical-align: sub;
  }
  .delete::before{
    content: "\e69d";
    font-size: 24px;
    vertical-align: sub;
  }
</style>
