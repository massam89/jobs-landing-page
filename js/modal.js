const images = document.getElementsByClassName('gallery-image')
const modal = document.getElementById('modall')
const modalClose = document.getElementsByClassName('modall-close')[0]

Array.prototype.forEach.call(images, image => {
    image.addEventListener('click', (e) => {
        modal.style.display = 'block'
        modal.childNodes[3].src = e.path[0].src

        modal.childNodes[3].classList.remove('transition');
        setTimeout(() => {
            modal.childNodes[3].classList.add('transition');
        }, 5)
    })
  });

modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})

