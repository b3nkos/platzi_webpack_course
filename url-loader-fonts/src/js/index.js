import '../css/styles.css'
import { firstMessage, delayedMessage } from './message'
import platziImg from '../images/platzi.png'

console.log('Hola Mundo! desde Webpack con babel')
document.write(firstMessage)
delayedMessage()

const image = document.createElement('img')
image.setAttribute('src', platziImg)
image.setAttribute('width', 50)
image.setAttribute('height', 50)

document.body.append(image)
