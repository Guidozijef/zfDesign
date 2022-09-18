<script>
export default {
  props: {
    props: {
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
      props: this.props,
      parent: this.parent,
      designer: this.designer,
      ...this.extendOptions
    })
  }
}
</script>
