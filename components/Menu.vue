<template>
  <div class="menu">
    <div class="menu__content">
      <transition name="right">
        <div v-if="stage > 0" class="menu__title">
          проекты
        </div>
      </transition>
      <div class="menu__info">
        <transition name="right">
          <div v-if="stage > 1" class="menu__item">
            <div class="menu__subtitle">
              Томск, Россия, 634050, пр. Ленина, д. 85, 2 этаж
            </div>
          </div>
        </transition>
        <transition name="right">
          <div v-if="stage > 2" class="menu__item">
            <div class="menu__subtitle">
              Телефон:
            </div>
            <a href="tel:+79913917892" class="menu__value">
              +7 991 391 78 92
            </a>
          </div>
        </transition>
        <transition name="right">
          <div v-if="stage > 3" class="menu__item">
            <div class="menu__subtitle">
              E-mail:
            </div>
            <a href="mailto:dogovor3@archnuvo.ru" class="menu__value">
              dogovor3@archnuvo.ru
            </a>
          </div>
        </transition>
        <transition name="right">
          <div v-if="stage > 4" class="menu__line" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      stage: 0
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.animateStages([500, 800, 900, 1000, 1200])
  },
  created () {

  },
  methods: {
    animateStages (timesArray) {
      timesArray.forEach((time) => {
        setTimeout(() => {
          this.stage++
        }, time)
      })
    }
  }
}
</script>

<style lang="scss" src="~/assets/scss/components/menu.scss" scoped></style>
