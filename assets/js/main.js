setInterval(function () {
    const newLocal = document.querySelector('span[data-show]')
  const show = newLocal
    const newLocal_1 = show.nextElementSibling || document.querySelector('span:first-child')
  const next = newLocal_1
    const newLocal3 = document.querySelector('span[data-up]')
    const newLocal_2 = newLocal
  const up = newLocal_2
  
  if (up) {
    up.removeAttribute('data-up')
  }
  
  show.removeAttribute('data-show')
  show.setAttribute('data-up', '')
  
  next.setAttribute('data-show', '')
}, 200)