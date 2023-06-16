import UIVInput from './UIVinput.vue'
import UIVButton from './UIVButton.vue'
import UIVQuantity from './UIVQuantity.vue'
const components = [
    {name: 'UIVInput', component: UIVInput },
    {name: 'UIVButton', component: UIVButton},
    {name: 'UIVQuantity', component: UIVQuantity}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component)
        })
    }
}