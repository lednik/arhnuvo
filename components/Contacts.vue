<template>
  <div class="contacts">
    <div class="form">
      <div class="form__block">
        <div class="form__title">
          Ваши данные
        </div>
        <input type="text" class="input" placeholder="Ваше имя">
        <input type="text" class="input" placeholder="Ваш e-mail">
        <input
          type="text"
          class="input"
          placeholder="Ваш номер телефона (необязательно)"
        >
      </div>
      <div class="form__block">
        <div class="form__title">
          Ваш бюджет
        </div>
        <div class="form__budgets">
          <drum-cmp v-for="(item,index) in budgets" :key="`budget-${index}`" :title="item.name" type="border" class="form__budget" />
        </div>
      </div>
      <drum-cmp title="отправить" type="action" background="white" class="form__button" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Drum from '~/components/Drum'

export default defineComponent({
  components: {
    'drum-cmp': Drum
  },
  setup () {},
  async asyncData ({ $http }) {
    const test = await $http.$get('/api/test')
    return {
      test
    }
  },
  data () {
    return {
      budgets: [
        {
          id: 1,
          name: '< 1.000.000₽'
        },
        {
          id: 2,
          name: '1.000.000 - 5.000.000₽'
        },
        {
          id: 3,
          name: '> 5.000.000₽'
        }
      ]
    }
  },
  computed () {},
  watch: {},
  mounted () {},
  created () {},
  methods: {}
})
</script>

<style lang="scss" src="~/assets/scss/components/contacts.scss" scoped></style>
