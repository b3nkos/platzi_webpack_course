import '../css/styles.css'
import { firstMessage, delayedMessage } from './message'
import platziImg from '../images/platzi.png'
import videoPlatzi from '../videos/que-es-core.mp4'

console.log('Hola Mundo! desde Webpack con babel')
document.write(firstMessage)
delayedMessage()

const image = document.createElement('img')
image.setAttribute('src', platziImg)
image.setAttribute('width', 50)
image.setAttribute('height', 50)
document.body.append(image)

const video = document.createElement('video')
video.setAttribute('src', videoPlatzi)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)
document.body.append(video)
