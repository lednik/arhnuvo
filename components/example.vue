<template>
  <div class="menu">
    4
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {

  },
  async asyncData ({ $http }) {
    const test = await $http.$get('/api/test')
    return {
      test
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {

  },
  mounted () {

  },
  created () {

  },
  methods: {

  }
})
</script>

<style lang="scss" src="~/assets/scss/components/drum.scss" scoped></style>
