const images = document.getElementsByClassName('gallery-image')
const modal = document.getElementById('modall')
const modalImage = document.getElementById('modall-image')

Array.prototype.forEach.call(images, image => {
    image.addEventListener('click', (e) => {
        modal.style.display = 'block'
        console.log(e);
        modalImage.src = e.target.currentSrc

        modalImage.classList.remove('transition');
        setTimeout(() => {
            modalImage.classList.add('transition');
        }, 5)
    })
  });

modal.addEventListener('click', (e) => {
    const isClickInside = modalImage.contains(e.target);
    if (!isClickInside) {
        modal.style.display = 'none'
    }
});