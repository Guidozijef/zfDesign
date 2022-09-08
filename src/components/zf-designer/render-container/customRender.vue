<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    extendOptions: {
      type: Object,
      default: () => ({})
    },
    designer: {
      type: Object,
      default: () => ({})
    },
    parent: null,
    render: {
      type: Function,
      default: () => ({})
    }
  },
  render (h) {
    return this.render(h, {
      options: this.options,
      parent: this.parent,
      designer: this.designer,
      ...this.extendOptions
    })
  }
}
</script>
