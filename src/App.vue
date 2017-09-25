<template>
  <section class="section" id="app">
    <div class="control">
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
