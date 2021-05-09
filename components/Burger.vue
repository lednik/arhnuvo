<template>
  <div
    :class="{'burger_active': isMenu}"
    class="burger"
    @click="toggle"
  >
    <div class="burger__line burger__top" />
    <div class="burger__line burger__center" />
    <div class="burger__line burger__bottom" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    isMenu: {
      type: Boolean,
      required: true
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
    toggle () {
      this.$emit('burgerClicked')
    }
  }
})
</script>

<style lang="scss" src="~/assets/scss/components/burger.scss" scoped></style>
