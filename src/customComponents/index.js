import NCarouselCustom from './n-carousel-custom'
import NFormCustom from './n-form-custom'
import NFormItemCustom from './n-form-item-custom'
import NInputCustom from './n-input-custom'

let components = [
  NCarouselCustom,
  NFormCustom,
  NFormItemCustom,
  NInputCustom
]

export default function install(app) {
  components.forEach(comp => {
    app.component(comp.name, comp)
  })
}