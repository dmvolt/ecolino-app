<template>
  <div>
    <div class="field">
      <div class="control">
        <input class="input" type="text" v-model.trim="username" placeholder="Ваш логин">
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input class="input" type="password" v-model.trim="password" placeholder="Ваш пароль">
      </div>
    </div>

    <p><a class="button is-success" @click="loginUser">Войти в систему</a></p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      title: 'авторизация',
      username: '',
      password: '',
      endpoint: this.$root.endpointLogin
    }
  },
  methods: {
    loginUser: function(){
      if(!this.username || !this.password){

        alert('Введите логин и пароль!')

      } else {

        this.axios.get(this.endpoint + '?username=' + this.username + '&password=' + this.password)
        .then(data => {
          //console.log(data)
          if(data.data.status){
            localStorage.user = data.data.id_user

            alert(data.data.message)
            this.$router.push('/')

          } else {

            alert(data.data.message)
          }
        })
        .catch(err => console.log(err))
      }
    }
  }
}
</script>
