<template>
  <router-link class="card card--small" :to="{ name: 'View', params: { contentType: contentType, id: index }}">
    <div class="card-top">
      <div class="card-status" v-if="order.visible">
           <svg class="svg-icon"><use href="img/sprite.svg#lime"></use></svg > Просмотрено
        </div>
        <div class="card-status" v-else>
          <svg class="svg-icon"><use href="img/sprite.svg#ex"></use></svg > Новое
        </div>
        <svg class="svg-icon"><use href="img/sprite.svg#calendar"></use></svg > <time datetime="2016-1-1">{{ order.date_service }}</time>
        <svg class="svg-icon"><use href="img/sprite.svg#clock"></use></svg > <time datetime="2016-1-1">{{ order.time_service }}</time>
    </div>

    <footer class="card-footer">
      <svg class="svg-icon"><use href="img/sprite.svg#house"></use></svg > {{ order.address }}
    </footer>
  </router-link>
</template>

<script>
export default {
  name: 'order',
  props: ['order', 'index', 'content-type']
}
</script>
