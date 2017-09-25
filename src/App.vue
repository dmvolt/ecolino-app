<template>
  <section class="section" id="app">
    <div class="container">
      <div class="has-text-centered">
        <img src="img/logo.png" alt="" class="section__logo">
      </div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      headerTitle: 'Ecolino'
    }
  }
}
</script>


<style>
  .container {
    max-width: 320px;
  }
</style>
