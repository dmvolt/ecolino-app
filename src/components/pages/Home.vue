<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li :class="isNew ? 'is-active' : ''"><a @click="isMy = false; isNew = true">Новые заказы</a></li>
        <li :class="isMy ? 'is-active' : ''"><a @click="isNew = false; isMy = true">Ваши заказы</a></li>
      </ul>
    </div>

    <!--<h3 class="subtitle is-3">{{ headerTitle }}</h3>-->

    <div v-if="isNew">
      <div v-if="!newOrders"> Новых заказов нет</div>
      <div v-else>
        <orders v-for="(index, key) in newOrders" content-type="new" :order="index" :index="key" :key="key"> </orders>
      </div>
    </div>

    <div v-if="isMy">
      <div v-if="!myOrders"> Ваших заказов нет</div>
      <div v-else>
        <orders v-for="(index, key) in myOrders" content-type="my" :order="index" :index="key" :key="key"> </orders>
      </div>
    </div>

    <div class="field is-grouped">
      <p class="control">
        <a @click="logoutUser" class="button">Разлогиниться</a>
      </p>
      <p class="control">
        <a @click="fetchOrders" class="button is-primary">Обновить</a>
      </p>
    </div>
  </div>
</template>

<script>
import orders from '../shared/order.vue'

export default {
  name: 'Home',
  components: {orders},
  data () {
    return {
      isNew: true,
      isMy: false,
      headerTitle: this.$root.headerTitle + 'Home',
      endpoint: this.$root.endpointOrder,
      userId: 0
    }
  },
  computed:{
    newOrders(){
      return this.$store.getters.getAllOrders.orders_new
    },
    myOrders(){
      return this.$store.getters.getAllOrders.orders_my
    }
  },
  methods: {
    fetchOrders(){
      const userId = this.userId
      const endpoint = this.endpoint
      this.$store.dispatch('fetchAllOrders', { userId, endpoint })
    },
    logoutUser: function(){

      if(localStorage.user){
        localStorage.removeItem("user")
        alert('hello world!');
        //загружаем компонент login
        this.$router.push('/login')

      } else {
        alert('Вы не были ранее авторизованы!', 'Ecolino')
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.fetchOrders
    }
  },
  created: function(){
    if(localStorage.user){
      this.userId = localStorage.user
      this.fetchOrders()
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>

