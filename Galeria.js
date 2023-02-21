// Abrir imagen en una ventana modal al hacer click
const items = document.querySelectorAll('.item');

for (const item of items) {
  item.addEventListener('click', function() {
    const imageSrc = this.querySelector('img').src;
    const imageAlt = this.querySelector('img').alt;
    const imageDescription = this.querySelector('p').textContent;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <img src="${imageSrc}" alt="${imageAlt}">
        <p>${imageDescription}</p>
        <button class="close-button">Cerrar</button>
      </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
      modal.remove();
    });
  });
}
