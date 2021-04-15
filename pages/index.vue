<template>
  <div class="container">
    <!-- <drum-cmp title="рассчитать проект" />
    <drum-cmp title="рассчитать проект" background="white" />
    <drum-cmp title="рассчитать проект" type="border" />
    <drum-cmp title="проекты" type="large" />
    <arrow-button-cmp title="больше проектов" /> -->
    <contacts-cmp title="больше проектов" />
  </div>
</template>

<script>
// import Drum from '~/components/Drum'
// import ArrowButton from '~/components/ArrowButton'
import Contacts from '~/components/Contacts'
export default {
  components: {
    // 'drum-cmp': Drum,
    // 'arrow-button-cmp': ArrowButton,
    'contacts-cmp': Contacts
  },
  async asyncData ({ $http }) {
    const test = await $http.$get('/api/test')
    return {
      test
    }
  }
}
</script>

<style scoped lang="scss"></style>
