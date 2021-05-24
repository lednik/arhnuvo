<template>
  <div class="project-slide" :class="{'project-slide_first': isFirst, 'passive': isPassive}">
    <template v-if="project.type == 1">
      <img class="project-slide__img" :class="`project-slide__mainImg_${project.type}`" :src="project.mainImg" :alt="project.name">
      <div class="project-slide__column">
        <div class="project-slide__row">
          <img class="project-slide__img" :class="`project-slide__smallImg_${project.type}`" :src="project.smallImg" :alt="project.name">
          <transition name="sliderInfo">
            <div v-if="!isPassive" class="project-slide__info">
              <h1 class="project-slide__name">
                {{ project.name }}
              </h1>
              <p class="project-slide__about">
                {{ project.about }}
              </p>
            </div>
          </transition>
        </div>
        <img class="project-slide__img" :class="`project-slide__subImg_${project.type}`" :src="project.subImg" :alt="project.name">
      </div>
    </template>
    <template v-if="project.type == 2">
      <div class="project-slide__column project-slide__column_end">
        <img class="project-slide__img" :class="`project-slide__mainImg_${project.type}`" :src="project.mainImg" :alt="project.name">
        <transition name="sliderInfo">
          <div v-if="!isPassive" class="project-slide__info" :class="`project-slide__info_${project.type}`">
            <h1 class="project-slide__name">
              {{ project.name }}
            </h1>
            <p class="project-slide__about">
              {{ project.about }}
            </p>
          </div>
        </transition>
      </div>
      <div class="project-slide__column">
        <img class="project-slide__img" :class="`project-slide__subImg_${project.type}`" :src="project.subImg" :alt="project.name">
        <img class="project-slide__img" :class="`project-slide__smallImg_${project.type}`" :src="project.smallImg" :alt="project.name">
      </div>
    </template>
    <template v-if="project.type == 3">
      <div class="project-slide__column project-slide__column_end">
        <img class="project-slide__img" :class="`project-slide__subImg_${project.type}`" :src="project.subImg" :alt="project.name">
        <img class="project-slide__img" :class="`project-slide__smallImg_${project.type}`" :src="project.smallImg" :alt="project.name">
      </div>
      <div class="project-slide__column">
        <transition name="sliderInfo">
          <div v-if="!isPassive" class="project-slide__info" :class="`project-slide__info_${project.type}`">
            <h1 class="project-slide__name">
              {{ project.name }}
            </h1>
            <p class="project-slide__about">
              {{ project.about }}
            </p>
          </div>
        </transition>
        <img class="project-slide__img" :class="`project-slide__mainImg_${project.type}`" :src="project.mainImg" :alt="project.name">
      </div>
    </template>
    <template v-if="project.type == 4">
      <div class="project-slide__column project-slide__column_end">
        <img class="project-slide__img" :class="`project-slide__smallImg_${project.type}`" :src="project.smallImg" :alt="project.name">
        <img class="project-slide__img" :class="`project-slide__subImg_${project.type}`" :src="project.subImg" :alt="project.name">
      </div>
      <div class="project-slide__column">
        <img class="project-slide__img" :class="`project-slide__mainImg_${project.type}`" :src="project.mainImg" :alt="project.name">
        <transition name="sliderInfo">
          <div v-if="!isPassive" class="project-slide__info" :class="`project-slide__info_${project.type}`">
            <h1 class="project-slide__name">
              {{ project.name }}
            </h1>
            <p class="project-slide__about">
              {{ project.about }}
            </p>
          </div>
        </transition>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      // type, mainImg, subImg, smallImg, id, name, about
      type: Object,
      required: true
    },
    isFirst: {
      type: Boolean,
      default: false
    },
    isPassive: {
      type: Boolean
    }
  },
  data () {
    return {
      slider: {
        isActive: false
      }
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
}
</script>

<style lang="scss" src="~/assets/scss/components/project-slide.scss" scoped></style>
