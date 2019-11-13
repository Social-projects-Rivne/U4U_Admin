import Vue from 'vue'
import App from './app.vue'
import router from './router/router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './styles/global.scss'
import { ValidationProvider,  extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
import * as api from './services/api';


const datePattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

// Add a rule.
extend('isEmailUnique', {
    async validate(value) {
      return api.isUnique('email', value)
             .then(res => true)
             .catch(err => false)
    },
    message: 'E-mail already exists'
});

extend('isNickNameUnique', {
    async validate(value) {
        return api.isUnique('nickname', value)
            .then(res => true)
            .catch(err => false)
    },
    message: 'Nick name already exists'
});

extend('required', {
    validate: value => !!value, // the validation function
    message: 'This field is required' // the error message
});

extend('email', email);

extend('min', min);

extend('date', {
   validate: value => datePattern.test(value),
   message: 'Date must be yyyy-mm-dd format'
});



library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
