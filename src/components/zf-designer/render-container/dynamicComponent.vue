<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    render: {
      type: Function,
      default: () => ({})
    }
  },
  render (h) {
    return this.render(h, {
      options: this.options,
    })
  }
}
</script>
