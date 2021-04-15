<template>
  <div>
    <header-cmp />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/layouts/Header'
export default {
  components: {
    'header-cmp': Header
  },
  async asyncData ({ $http }) {
    const test = await $http.$get('/api/test')
    return {
      test
    }
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
