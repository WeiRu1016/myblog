import { trim, md2html } from './assets/js/untils'

const formatTime = (value) => {
  const date = new Date(value)
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  month = month > 9 ? month : `0${month}`
  day = day > 9 ? day : `0${day}`
  return [year, month, day].join('/')
}
const excerpt = (value) => {
  let div = document.createElement('div')
  div.innerHTML = md2html(value).replace(/<pre>(\n|.)*<\/pre>/, '')
  return trim(div.innerText)
}
export default {
  formatTime,
  excerpt
}

