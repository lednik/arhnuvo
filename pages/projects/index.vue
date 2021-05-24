<template>
  <section class="projects">
    <!-- <nuxt-link :to="{ name: 'projects-id', params: { id: index }}">
      {{ user.name }}
    </nuxt-link> -->
    <div class="projects__list">
      <div ref="wrapper" class="projects__wrapper">
        <div class="projects__info" :class="{'projects__info_hidden': slider.isActive}">
          <h1 class="projects__title">
            Бизнес это искусство
          </h1>
          <p class="projects__about">
            Наши работы, куда вложены труд, опыт и мастерство
          </p>
        </div>
        <nuxt-link
          v-for="(project, index) in projects"
          :key="project.id"
          :to="{ name: 'projects-id', params: { id: project.id }}"
        >
          <project-cmp
            :project="project"
            :is-first="index == 0"
            :is-passive="!slider.isActive"
          />
        </nuxt-link>
      </div>
    </div>
    <progress-cmp :total="totalComputed" :progress="progressComputed" />
  </section>
</template>

<script>
import ProjectSlide from '~/components/Project-slide'
import Progress from '~/components/Progress'
export default {
  components: {
    'project-cmp': ProjectSlide,
    'progress-cmp': Progress
  },
  asyncData ({ params, error, $http }) {
    return $http.$get('/api/projects')
      .then((res) => {
        return { projects: res }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'User not found' })
      })
  },
  data () {
    return {
      slider: {
        isActive: false,
        progress: 0,
        wrapper: {},
        animation: false
      }
      // projects: [
      //   {
      //     id: '1',
      //     name: 'Rubius',
      //     type: 1,
      //     mainImg: '/images/index/Banner.png',
      //     subImg: '/images/index/Banner.png',
      //     smallImg: '/images/index/Banner.png',
      //     about: 'Инженерное программное обеспечение'
      //   },
      //   {
      //     id: '2',
      //     name: 'Minidino',
      //     type: 2,
      //     mainImg: '/images/index/Banner.png',
      //     subImg: '/images/index/Banner.png',
      //     smallImg: '/images/index/Banner.png',
      //     about: 'Магазин необычной, но функциональной детской одежды'
      //   },
      //   {
      //     id: '3',
      //     name: '54A4',
      //     type: 3,
      //     mainImg: '/images/index/Banner.png',
      //     subImg: '/images/index/Banner.png',
      //     smallImg: '/images/index/Banner.png',
      //     about: 'Панорамный рестобар в центре города Томск'
      //   },
      //   {
      //     id: '4',
      //     name: 'Учебный центр ',
      //     type: 4,
      //     mainImg: '/images/index/Banner.png',
      //     subImg: '/images/index/Banner.png',
      //     smallImg: '/images/index/Banner.png',
      //     about: 'Учебный центр молочного животноводства с интерактивным учебным классом'
      //   }
      // ]
    }
  },
  computed: {
    total () {
      return this.projects.length
    },
    totalComputed () {
      let string = ''
      if (toString(this.projects.length < 9)) {
        string = `0${this.projects.length}`
      } else {
        string = `${this.projects.length}`
      }
      return string
    },
    progressComputed () {
      let string = ''
      if (toString(this.slider.progress + 1 < 10)) {
        string = `0${this.slider.progress + 1}`
      } else {
        string = `${this.slider.progress + 1}`
      }
      return string
    }
  },
  watch: {
  },
  mounted () {
    const scrollableElement = document.body
    scrollableElement.addEventListener('wheel', this.checkScrollDirection)
    this.slider.wrapper = this.$refs.wrapper
  },
  created () {

  },
  methods: {
    hideInfo () {
      this.slider.wrapper.style.transform = 'translateX(-490px)'
    },
    showInfo () {
      this.slider.wrapper.style.transform = 'translateX(0px)'
    },
    moveWrapper () {
      const x = 25.52 + this.slider.progress * 72.91
      this.slider.wrapper.style.transform = `translateX(-${x}vw)`
    },
    setAnimation () {
      this.slider.animation = true
      setTimeout(() => {
        this.slider.animation = false
      }, 1200)
    },
    scrollPrevious () {
      if (this.slider.progress > 0) {
        this.slider.progress--
        this.moveWrapper()
        this.setAnimation()
      } else {
        this.slider.isActive = false
        this.showInfo()
        this.setAnimation()
      }
    },

    scrollNext () {
      if (!this.slider.isActive) {
        this.slider.isActive = !this.slider.isActive
        this.slider.progress = 0
        this.hideInfo()
        this.setAnimation()
      } else if (this.slider.progress < this.total - 1) {
        this.slider.progress++
        this.moveWrapper()
        this.setAnimation()
      }
    },
    checkScrollDirectionIsUp (e) {
      if (e.wheelDelta) {
        return e.wheelDelta > 0
      }
      return e.deltaY < 0
    },
    checkScrollDirection (e) {
      if (!this.slider.animation) {
        if (this.checkScrollDirectionIsUp(e)) {
          this.scrollPrevious()
        } else {
          this.scrollNext()
        }
      }
    }
  }
}
</script>

<style lang="scss" src="~/assets/scss/pages/projects.scss" scoped></style>
