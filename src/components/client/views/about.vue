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
    this.getData()
  },
  methods: {
    async getData () {
      if (this.$route.params.name === 'weilai') {
        const data = await import('../../../assets/resume/weilai.js')
        this.config = {
          ...data.default
        }
      } else {
        const data = await import('../../../assets/resume/weiru.js')
        this.config = {
          ...data.default
        }
      }
      this.loading = false
    }
  },
  components: {
    resume
  }
}
</script>
