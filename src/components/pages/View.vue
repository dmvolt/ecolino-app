<template>
  <div>
  <div class="card" v-if="pageData">
    <header class="card-header">
      <p class="card-header-title">
        Адрес: {{ pageData.address }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>Дата: {{ pageData.date_service }}</p>
        <p>Время: {{ pageData.time_service }}</p>
        <p>Тип уборки: {{ pageData.service_name }}</p>
        <p>Оплата: {{ pageData.payment_name }}</p>

        <h3>Состав работ:</h3>

        <p v-for="work in pageData.work"> <span v-if="work.is_main">Планировка</span><span v-else>Дополнительно</span> {{ work.count }} {{ work.option_name }}</p>
        <h3>Оплата: {{ pageData.total }} рублей</h3>
      </div>
    </div>
    <footer class="card-footer" v-if="$route.params.contentType == 'my'">
      <a @click="conflictOrder" class="card-footer-item is-danger"> Конф.</a>
      <a @click="failOrder" class="card-footer-item is-warning"> Отказ</a>
      <a @click="doneOrder" class="card-footer-item is-primary"> Вып.</a>
    </footer>
    <footer class="card-footer" v-else-if="$route.params.contentType == 'new'">
      <a @click="preFailOrder" class="card-footer-item is-warning"> Отказаться</a>
      <a @click="acceptOrder" class="card-footer-item is-primary"> Принять</a>
    </footer>
  </div>
  <div class="card" v-else>
    что то не то!
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'View',
  data () {
    return {
      headerTitle: 'View Ecolino',
      userId: 0,
      endpoint: this.$root.endpointAction,
      pageData: false
    }
  },
  computed:{
    getPage(){
      if(this.$route.params.contentType == 'new' && this.$store.getters.getAllOrders.orders_new[this.$route.params.id]){

        this.pageData = this.$store.getters.getAllOrders.orders_new[this.$route.params.id]

      } else if(this.$route.params.contentType == 'my' && this.$store.getters.getAllOrders.orders_my[this.$route.params.id]){

        this.pageData = this.$store.getters.getAllOrders.orders_my[this.$route.params.id]
      }
      //console.log('ПАРАМЕТРРРРР '+this.$route.params.id)
    }
  },
  watch: {
    '$route' (to, from) {
      this.getPage
    }
  },
  methods: {
    acceptOrder: function() {

      axios.get(this.endpoint + '?id_user=' + this.userId + '&id_type=1&id_order=' + this.pageData.id)
      .then(data => {
        //console.log(data)
        alert(data.data.message)
        this.$router.push('/')
      })
      .catch(err => console.log(err))
    },
    preFailOrder: function() {
      this.$router.push('/')

    },
    failOrder: function() {

      axios.get(this.endpoint + '?id_user=' + this.userId + '&id_type=3&id_order=' + this.pageData.id)
      .then(data => {
        //console.log(data)
        alert(data.data.message)
        this.$router.push('/')
      })
      .catch(err => console.log(err))
    },
    doneOrder: function() {

      axios.get(this.endpoint + '?id_user=' + this.userId + '&id_type=2&id_order=' + this.pageData.id)
      .then(data => {
        //console.log(data)
        alert(data.data.message)
        this.$router.push('/')
      })
      .catch(err => console.log(err))
    },
    conflictOrder: function() {

      axios.get(this.endpoint + '?id_user=' + this.userId + '&id_type=4&id_order=' + this.pageData.id)
      .then(data => {
        //console.log(data)
        alert(data.data.message)
        this.$router.push('/')
      })
      .catch(err => console.log(err))
    }
  },
  created: function(){
    this.userId = localStorage.user
    this.getPage
  }
}
</script>
