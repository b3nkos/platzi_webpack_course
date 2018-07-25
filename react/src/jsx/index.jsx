import '../css/styles.css'
import {firstMessage, delayedMessage} from '../js/message'
import platziImg from '../images/platzi.png'
import {teachers} from '../js/teachers.json'
import renderToDom from '../js/render-to-dom'
import React from 'react'
import { render } from 'react-dom'
import TeacherList from '../jsx/components/teacherList.jsx'

render(<TeacherList teachers={teachers}/>, document.getElementById('container'))

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
