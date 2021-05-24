<template>
  <div :class="{'header_white': isMenu}" class="header">
    <nuxt-link :to="{ name: 'index'}">
      <div class="header__logo">
        <svg width="45" height="31" viewBox="0 0 45 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 31H37.8036L30.334 18.862H25.8704L21.0425 28.5549L19.8583 31H15.3036L14.1194 28.5549L0 0H7.10526L14.1194 14.4085L17.3988 21.0451H17.8543L21.7713 13.0113H32.7935C34.3421 13.0113 35.3441 12.662 36.0729 12.0507C36.7105 11.3521 37.0749 10.4789 37.0749 9.25634C37.0749 7.94648 36.6194 7.07324 35.7085 6.46197C35.1619 6.11268 33.9777 5.8507 32.3381 5.8507H25.2328L28.0567 0H33.1579C33.8866 0 34.5243 0 35.1619 0.0873239C37.6215 0.349296 39.5344 1.22254 40.9919 2.61972C42.7227 4.27887 43.6336 6.63662 43.6336 9.69296C43.6336 11.9634 42.996 13.8845 41.8117 15.369C40.6275 16.7662 39.17 17.8141 37.2571 18.4254L45 31Z" fill="none" />
        </svg>
      </div>
    </nuxt-link>

    <div class="header__right">
      <div class="header__button" @click="goToForm">
        <drum-cmp title="рассчитать проект" type="small" :background="isMenu? 'white' : 'dark'" />
      </div>
      <burger-cmp :is-menu="isMenu" @burgerClicked="toggleMenu" />
    </div>
    <transition name="menu">
      <menu-cmp v-if="isMenu" @close-menu="toggleMenu" />
    </transition>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Drum from '~/components/Drum'
import Burger from '~/components/Burger'
import Menu from '~/components/Menu'
import ScrollToElement from '~/components/mixins/scrollToElement'

export default defineComponent({
  components: {
    'drum-cmp': Drum,
    'burger-cmp': Burger,
    'menu-cmp': Menu
  },
  mixins: [ScrollToElement],
  setup () {

  },
  data () {
    return {
      isMenu: false,
      isAnimation: false
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
    toggleMenu () {
      this.isMenu = !this.isMenu
      if (this.isMenu) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'unset'
      }
    },
    goToForm () {
      this.scrollToElement('.contacts')
      if (this.isMenu) {
        setTimeout(() => {
          document.body.style.overflowY = 'unset'
          this.isMenu = false
        }, 300)
      }
    }
  }
})
</script>

<style lang="scss" src="~/assets/scss/layout/header.scss" scoped></style>
