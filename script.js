// get all panels and save it in an array
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClassses()
    panel.classList.add('active')
  })
})

function removeActiveClassses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}