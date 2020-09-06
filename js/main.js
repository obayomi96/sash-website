const modalbtn = document.querySelector('.btn-submit');
const closeModalbtn = document.querySelector('.close-modal');
const modalDiv = document.querySelector('.modal-div');
const modalCard = document.querySelector('.modal-card');
const emailInput = document.querySelector('.email-input');

let showModal = false;

modalbtn.addEventListener('click', (e) => {
  e.preventDefault();
  showModal = true;
  if(showModal) {
    modalDiv.style.display = 'block';
  } else {
    modalDiv.style.display = 'none';
  }
});

closeModalbtn.addEventListener('click', () => {
  modalDiv.style.display = 'none';
});
