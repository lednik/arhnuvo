<template>
  <div class="arrow-button">
    <div class="arrow-button__text">
      {{ title }}
    </div>
    <div class="arrow-button__right">
      <div class="arrow-button__wrapper">
        <div class="arrow-button__arrow">
          <div class="arrow-button__line" />
          <div class="arrow-button__mark" />
        </div>
        <div class="arrow-button__arrow">
          <div class="arrow-button__line" />
          <div class="arrow-button__mark" />
        </div>
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
    }
  }
}
</script>

<style
  lang="scss"
  src="~/assets/scss/components/arrow-button.scss"
  scoped
></style>
