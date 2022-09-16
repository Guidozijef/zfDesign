<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    extendOptions: {
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
      item: this.item,
      ...this.extendOptions
    })
  }
}
</script>
