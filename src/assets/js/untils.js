import markedjs from 'marked'
import hljs from 'highlight.js'

// hljs.configure({
//   classPrefix: ''     // don't append class prefix
// })
markedjs.setOptions({
  renderer: new markedjs.Renderer(),
  gfm: true, // 允许 Git Hub标准的markdown.
  tables: true, // 允许支持表格语法。该选项要求 gfm 为true。
  breaks: true, // 允许回车换行。该选项要求 gfm 为true。
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  highlight: function (code, lang) {
    console.log('lang:', lang)
    return hljs.highlightAuto(code).value
  }
})

/**
 * 公共处理函数
 * **/
export function throttle (fn, delay, context) {
  let time
  context = context || null
  return function () {
    let arg = arguments
    clearTimeout(time)
    time = setTimeout(() => {
      fn.apply(context, arg)
    }, delay)
  }
}
export function trim (str) {
  return str.replace(/(^\s*|\s*$)/, '')
}
export function md2html (text) {
  return markedjs(text)
}
