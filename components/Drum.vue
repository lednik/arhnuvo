<template>
  <div class="drum" :class="`drum_${type} drum_${background}`">
    <div class="drum__wrapper">
      <div class="drum__text drum__top">
        {{ title }}
      </div>
      <div class="drum__text drum__bottom">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      // small/border/large/action
      type: String,
      required: false,
      default: 'small'
    },
    background: {
      // dark/white
      type: String,
      required: false,
      default: 'dark'
    }
  }
}
</script>

<style lang="scss" src="~/assets/scss/components/drum.scss" scoped></style>
