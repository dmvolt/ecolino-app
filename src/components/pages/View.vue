<template>
  <div class="card" v-if="pageData">
    <div class="card-top">
      <div class="card-status" v-if="pageData.visible">
         <svg class="svg-icon"><use href="img/sprite.svg#lime"></use></svg > Просмотрено
      </div>
      <div class="card-status" v-else>
        <svg class="svg-icon"><use href="img/sprite.svg#ex"></use></svg > Новое
      </div>
      <svg class="svg-icon"><use href="img/sprite.svg#calendar"></use></svg > <time datetime="2016-1-1">{{ pageData.date_service }}</time>
      <svg class="svg-icon"><use href="img/sprite.svg#clock"></use></svg > <time datetime="2016-1-1">{{ pageData.time_service }}</time>
    </div>

    <div class="card-line">
      <svg class="svg-icon"><use href="img/sprite.svg#house"></use></svg > {{ pageData.address }}
    </div>

    <div class="card-line">
      <svg class="svg-icon"><use href="img/sprite.svg#trash"></use></svg > Тип уборки: {{ pageData.service_name }}
    </div>

    <div class="card-line">
      <svg class="svg-icon"><use href="img/sprite.svg#money"></use></svg > Оплата: {{ pageData.payment_name }}
    </div>

    <div class="card-line">
      <svg class="svg-icon"><use href="img/sprite.svg#cleaner"></use></svg > Состав работ:
      <div class="card-work">
        <p v-for="work in pageData.work">{{ work.count }} {{ work.option_name }}</p>
      </div>
    </div>

    <div class="card-line">
      <svg class="svg-icon"><use href="img/sprite.svg#rub"></use></svg > <b>{{ pageData.total }} руб.</b>
    </div>

    <footer class="card-footer card-footer--buttons" v-if="$route.params.contentType == 'my'">
      <a @click="conflictOrder" class="button is-danger is-small"> конфликт</a>
      <a @click="failOrder" class="button is-info is-small"> отказаться</a>
      <a @click="doneOrder" class="button is-primary is-small"> выполнено</a>
    </footer>

    <footer class="card-footer card-footer--buttons" v-else-if="$route.params.contentType == 'new'">
      <a @click="preFailOrder" class="button is-info"><svg class="svg-icon"><use href="img/sprite.svg#no"></use></svg > Скрыть</a>
      <a @click="acceptOrder" class="button is-primary"><svg class="svg-icon"><use href="img/sprite.svg#status-3"></use></svg > Принять</a>
    </footer>
  </div>

  <div class="card" v-else>
    что то не то!
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
