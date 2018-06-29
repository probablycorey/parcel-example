import moment from 'moment'
import hello from './hello.js'

let element = document.querySelector('#my-content')
element.textContent = hello() + moment().format('LTS')
