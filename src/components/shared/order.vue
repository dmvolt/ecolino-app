<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title" v-if="order.visible">
        {{ order.address }} Просмотрено
      </p>
      <p class="card-header-title" v-else>
        {{ order.address }} Совсем новое
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <time datetime="2016-1-1">{{ order.date_service }}</time>
        <time datetime="2016-1-1">{{ order.time_service }}</time>
      </div>
    </div>
    <footer class="card-footer">
      <router-link class="card-footer-item" :to="{ name: 'View', params: { contentType: contentType, id: index }}">подробнее</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'order',
  props: ['order', 'index', 'content-type']
}
</script>

<style>
  .card {
    margin-bottom: 25px;
  }
</style>
