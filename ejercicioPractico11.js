function networkStatus(){
  const $div = document.createElement('div')

  if(navigator.onLine){
    $div.textContent = 'conexión reestablecida'
    $div.classList.add('online')
    $div.classList.remove('offline')
  } else {
    $div.textContent = 'conexión perdida'
    $div.classList.add('offline')
    $div.classList.remove('online')
  }

  document.body.append($div)

  setTimeout(()=>{
    document.body.removeChild($div)
  }, 2000)
}

addEventListener('online', e => networkStatus())
addEventListener('offline', e => networkStatus())