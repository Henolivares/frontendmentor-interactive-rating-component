import './style.scss'

let ratingSection = document.querySelector('#rating')
let form = ratingSection.querySelector('#form')
let errorMessage = form.querySelector('#error')

let responseSection = document.querySelector('#response')
let responseSelected = responseSection.querySelector('#response-selected')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(form)
  let rating = data.get('rating')

  if (!rating) {
    emptyForm(errorMessage)
    return
  }

  responseSelected.innerHTML = rating
  animation()
})

const emptyForm = (element) => {
  element.style.display = 'block'
}

const animation = () => {
  ratingSection.classList.add('u-hide')
  responseSection.classList.add('u-show')
}
