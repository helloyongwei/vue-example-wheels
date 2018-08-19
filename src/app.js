import Vue from 'vue'
import Icon from './icon'
import Button from './button'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el: '#app'
})