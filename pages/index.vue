<template>
  <div class="main">
    <div class="main-top">
      <h1 class="main-top__title main__title">
        Василий Рыбаков Коммерческий дизайн
      </h1>
      <p class="main-top__text main__text">
        «Коммерческий дизайн - это инструмент, создающий условия, при которых продажа будет совершена».
      </p>
      <p class="main-top__subtext main__text">
        © Василий Рыбаков
      </p>
    </div>
    <div class="main-center">
      <div class="main-center__right">
        <div class="main-center__picture">
          <img src="images/index/Banner.png" alt="" class="main-center__image">
          <div class="main-center__box" />
        </div>
        <h1 class="main-center__title main__title">
          Я знаю, как дизайн будет воздействовать на ваших клиентов.
        </h1>
        <div class="main-center__bottom">
          <p class="main-center__text main__text">
            Моя команда разрабатывает больше, чем дизайн-проекты, мы  создаём бренды: визуальную концепцию и стратегию бизнеса, его атмосферу и эмоциональную идею.
          </p>
          <p class="main-center__text main__text">
            Мы знаем, что ваши клиенты будут чувствовать, сидя именно в этом кресле, о чём они будут думать, глядя именно на этот логотип. И самое главное -  мы можем этим управлять.
          </p>
        </div>
      </div>
    </div>
    <div class="main-projects">
      <div class="main-projects__list">
        <a v-for="(item, index) in projects" :key="`project-${index}`" :href="item.link" class="main-projects__project">
          <img class="main-projects__image" :src="item.img" alt="project image">
        </a>
      </div>
      <a href="/projects" class="main-projects__link">
        <arrow-button-cmp title="больше проектов" />
      </a>
    </div>
    <div class="main-bottom">
      <div class="main-bottom__info">
        <h1 class="main__title">
          Интерьер. Концепт. Логотип. Нейминг. Брендинг. Маркетинг.
        </h1>
        <p class="main-bottom__text main__text">
          Для нас это не просто слова. Это то, что мы делаем, это то, чем мы живем и то, что создаем для вас.
        </p>
      </div>
      <img src="/images/index/main-bottom.png" alt="photo" class="main-bottom__image">
    </div>
    <contacts-cmp title="Начните свой проект" />
  </div>
</template>

<script>
// import Drum from '~/components/Drum'
import ArrowButton from '~/components/ArrowButton'
import Contacts from '~/components/Contacts'
export default {
  components: {
    // 'drum-cmp': Drum,
    'arrow-button-cmp': ArrowButton,
    'contacts-cmp': Contacts
  },
  async asyncData ({ $http }) {
    const test = await $http.$get('/api/test')
    return {
      test
    }
  },
  data () {
    return {
      projects: [
        {
          img: '/images/index/Banner.png',
          link: '#'
        },
        {
          img: '/images/index/Banner.png',
          link: '#'
        },
        {
          img: '/images/index/Banner.png',
          link: '#'
        },
        {
          img: '/images/index/Banner.png',
          link: '#'
        },
        {
          img: '/images/index/Banner.png',
          link: '#'
        },
        {
          img: '/images/index/Banner.png',
          link: '#'
        },
        {
          img: 'images/index/Banner.png',
          link: '#'
        },
        {
          img: 'images/index/Banner.png',
          link: '#'
        },
        {
          img: 'images/index/Banner.png',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped src="~/assets/scss/pages/index.scss" lang="scss"></style>
