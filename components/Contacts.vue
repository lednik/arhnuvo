<template>
  <div class="contacts">
    <div class="contacts__title">
      {{ title }}
    </div>
    <div class="form">
      <div class="form__block">
        <div class="form__title">
          Ваши данные
        </div>
        <div class="input__wrapper">
          <transition name="fade">
            <div v-if="form.name.error" class="input__error">
              Неверное имя
            </div>
          </transition>
          <input
            v-model="form.name.value"
            type="text"
            class="input"
            placeholder="Ваше имя"
            :class="{'t-input__error' : form.name.error}"
            @input="form.name.error = false"
          >
        </div>
        <div class="input__wrapper">
          <transition name="fade">
            <div v-if="form.email.error" class="input__error">
              Неверный e-mail
            </div>
          </transition>
          <input
            v-model="form.email.value"
            type="text"
            class="input"
            placeholder="Ваш e-mail"
            :class="{'t-input__error' : form.email.error}"
            @input="form.email.error = false"
          >
        </div>
        <div class="input__wrapper">
          <transition name="fade">
            <div v-if="form.phone.error" class="input__error">
              Неверный номер
            </div>
          </transition>
          <input
            v-model="form.phone.value"
            v-mask="'+# (###) ### ## ##'"
            type="text"
            class="input"
            placeholder="+7 (___) ___ __ __"
            :class="{'t-input__error' : form.phone.error}"
            @input="form.phone.error = false"
          >
        </div>
      </div>
      <div class="form__block">
        <div class="form__title">
          Ваш бюджет
        </div>
        <div class="form__budgets">
          <div
            v-for="(item,index) in budgets"
            :key="`budget-${index}`"
            class="form__budget"
            @click="form.budget.value = item.name"
          >
            <drum-cmp
              :title="item.name"
              type="border"
              class="form__budget"
              :background="budgetBackground(item.name)"
              :class="{'drum_white' : form.budget.value == item.name}"
            />
          </div>
        </div>
      </div>
      <div class="form__button" @click="validForm">
        <drum-cmp
          title="отправить"
          type="action"
          background="white"
        />
      </div>
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
  props: {
    title: {
      type: String,
      required: true
    }
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
      form: {
        name: {
          value: '',
          error: false
        },
        email: {
          value: '',
          error: false
        },
        phone: {
          value: '',
          error: false
        },
        budget: {
          value: ''
        }
      },
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
  computed: {
  },
  watch: {},
  mounted () {},
  created () {},
  methods: {
    validForm () {
      let valid = true
      if (!this.form.name.value ||
        this.form.name.value.length < 2 ||
        this.form.name.value === '' ||
        /[^A-ZА-Я-—\s]/i.test(this.form.name.value)
      ) {
        this.form.name.error = true
        valid = false
      }
      if (this.form.phone.value.length > 0 && this.form.phone.value.length !== 18) {
        valid = false
        this.form.phone.error = true
      }
      if (!this.form.email.value ||
        this.form.email.value === '' ||
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(this.form.email.value) === false
      ) {
        this.form.email.error = true
        valid = false
      }
      return valid
    },
    budgetBackground (name) {
      if (name === this.form.budget.value) {
        return 'white'
      } else {
        return 'dark'
      }
    }
  }
})
</script>

<style lang="scss" src="~/assets/scss/components/contacts.scss" scoped></style>
