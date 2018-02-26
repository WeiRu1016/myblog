<template>
  <div class="page">
    <my-header></my-header>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
  import myHeader from '../myHeader'

  export default {
    name: 'index',
    components: {
      myHeader
    }
  }
</script>
