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
  return value
}
export default {
  formatTime,
  excerpt
}

