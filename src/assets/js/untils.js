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
