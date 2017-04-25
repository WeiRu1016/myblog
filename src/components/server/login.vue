<template>
  <div id="login">
    <div class="main">
      <form  @submit.prevent="submit" ref="form">
        <div class="input-group input-icon user">
          <input type="text" placeholder="请输入用户名" name="username">
        </div>
        <div class="input-group input-icon password">
          <input type="password" placeholder="请输入密码" name="password">
        </div>
        <button class="submit" type="submit">登录</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    methods: {
      // 登录地址：/api/login
      submit (e) {
        debugger
        let data = new FormData(this.$refs.form)
        fetch('/api/login', {
          method: 'post',
          body: data,
          credentials: 'include'
        }).then(response => {
          return response.json()
        }).then(data => {
          if (data.code === 'success') {
            this.$router.push({name: 'index'})
          }
        }).catch(err => {
          console.error(err)
        })
      }
    }
  }
</script>
<style scopedSlots lang="scss">
  #login{
    height: 100%;
    min-height:750px;
    text-align: center;
    font-size: 16px;
    background-color: #f1f1f1;
    .main{
      width: 300px;
      margin: 60px auto 0 auto;
      padding: 50px 50px 30px 50px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0,0,0,.1);
      vertical-align: middle;
      display: inline-block;
    }
  }
  .submit{
    display: block;
    width: 100%;
    padding: 8px 0px;
    border: 0px;
    border-radius: 5px;
  }
  .input-group {
    border: 1px solid #c8c8c8;
    border-radius: 5px;
    margin: 20px 0px;
    padding: 1px;
    position: relative;
    width:100%;
  }
  .input-group.input-icon::before{
    position: absolute;
    left: 0;
    font-size: 16px;
    margin: 10px 5px 10px 10px;
    font-family: 'iconfont';
  }
  .input-group.user::before{
    content: "\e600";
  }
  .input-group.password::before{
    content: "\e61a";
  }
  .input-group input{
    border: none;
    display: block;
    padding: 10px 0px 10px 0px;
    text-indent: 30px;
    width:100%;
    // line-height: 0px; 
  }
  @media (max-width: 768px), (max-device-width: 768px) {
    #login{
      height: auto;
      min-height: 0;
      background-color: transparent;
      .main{
        position: absolute;
        left: 50%;
        margin-left: -200px;
        box-shadow: none;
      }
    }
  }
</style>
