<template>
  <div class="container">
    <drum-cmp />
  </div>
</template>

<script>
import Drum from '~/components/Drum'
export default {
  components: {
    'drum-cmp': Drum
  },
  async asyncData ({ $http }) {
    const test = await $http.$get('/api/test')
    return {
      test
    }
  }
}
</script>

<style scoped lang="scss">

</style>
