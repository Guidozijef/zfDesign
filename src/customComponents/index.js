import NCarouselCustom from './n-carousel-custom'

let components = [
  NCarouselCustom,
]

export default function install(app) {
  components.forEach(comp => {
    app.component(comp.name, comp)
  })
}