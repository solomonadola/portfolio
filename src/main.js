import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnimateOnScroll from 'vue3-animate-onscroll'
/* import the fontawesome core */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
library.add(fas)




const app = createApp(App)
// eslint-disable-next-line vue/multi-word-component-names
app.component('fa', FontAwesomeIcon)
app.AOS = new AOS.init({ disable: "phone" });
app.use(store)
app.use(router)
app.config.productionTip = false
app.use(VueAnimateOnScroll)
app.use(AOS)
app.mount('#app')
