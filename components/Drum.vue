<template>
  <div class="drum" :class="`drum_${type}`">
    <div class="drum__wrapper">
      <div class="drum__text drum__top">
        text
      </div>
      <div class="drum__text drum__bottom">
        text
      </div>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'small'
    }
  }
  // setup () {

  // },
  // data () {
  //   return {
  //   }
  // },
  // computed () {

  // },
  // watch: {

  // },
  // mounted () {

  // },
  // created () {

  // },
  // methods: {

  // }
}
</script>

<style lang="scss" src="~/assets/scss/components/drum.scss" scoped></style>
