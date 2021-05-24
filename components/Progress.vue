<template>
  <div class="progress">
    <div class="progress__numbers">
      <span class="progress__progress">
        {{ progress }}
      </span>
      <span class="progress__total">
        /{{ total }}
      </span>
    </div>
    <div class="progress__bar">
      <div class="progress__line" :style="{ width : width + '%' }" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: String,
      required: true
    },
    total: {
      type: String,
      required: true
    }
  },
  computed: {
    width () {
      return this.progress / this.total * 100
    }
  }
}
</script>

<style lang="scss" src="~/assets/scss/components/progress.scss" scoped>

</style>
