<script>
export default {
  methods: {
    scrollToElement (selector) {
      const contacts = document.querySelector(selector)
      const top = contacts.offsetTop
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }
  }
}
</script>
