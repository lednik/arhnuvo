<template>
  <section class="project">
    <div class="project__links">
      <nuxt-link class="button" to="/projects">
        <div class="project__projects">
          Проекты
        </div>
      </nuxt-link>
      <span>
        →
      </span>
      <div class="project__short-name">
        {{ project.name }}
      </div>
    </div>
    <img :src="project.img1" :alt="project.name" class="project__img">
    <div class="project__info project__container">
      <div class="project__name">
        {{ project.fullName }}
      </div>
      <div class="project__text">
        {{ project.fullAbout }}
      </div>
    </div>
    <img :src="project.img2" :alt="project.name" class="project__img">
    <div class="project__description project__container">
      <div class="project__text">
        {{ project.description }}
      </div>
    </div>
    <img :src="project.img3" :alt="project.name" class="project__img">
    <div class="project__container">
      <div class="project__creating">
        {{ project.creating }}
      </div>
      <div class="project__text">
        <ul class="project__list">
          <li
            v-for="(item, index) in project.creatingList"
            :key="`li_${index}`"
            class="project__list-item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <img :src="project.img4" :alt="project.name" class="project__img">
    <div class="project__container">
      <div class="project__text">
        {{ project.result }}
      </div>
    </div>
    <img :src="project.img5" :alt="project.name" class="project__img">
    <contacts-cmp />
  </section>
</template>

<script>
import Contacts from '~/components/Contacts'
export default {
  components: {
    'contacts-cmp': Contacts
  },

  asyncData ({ params, error, $http }) {
    return $http.$get('/api/projects/' + params.id)
      .then((res) => {
        return { project: res }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'User not found' })
      })
  }
}
</script>

<style lang="scss" scoped src="~/assets/scss/pages/projects_id.scss"></style>
