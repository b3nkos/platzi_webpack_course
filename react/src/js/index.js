import '../css/styles.css'
import { firstMessage, delayedMessage } from './message'
import platziImg from '../images/platzi.png'
import { teachers } from './teachers.json'
import renderToDom from './render-to-dom'

console.log(teachers)

teachers.forEach((teacher) => {
  const element = document.createElement('li')
  element.textContent = teacher.name
  renderToDom(element)
})

console.log('Hola Mundo! desde Webpack con babel')
document.write(firstMessage)
delayedMessage()

const image = document.createElement('img')
image.setAttribute('src', platziImg)
image.setAttribute('width', 50)
image.setAttribute('height', 50)

document.body.append(image)
