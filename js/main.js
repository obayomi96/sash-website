const modalbtn = document.querySelector('.btn-submit');
const modalbtn2 = document.querySelector('.btn-submit2');
const closeModalbtn = document.querySelector('.close-modal');
const modalDiv = document.querySelector('.modal-div');
// const modalCard = document.querySelector('.modal-card');
// const emailInput = document.querySelector('.email-input');

let showModal = false;

const modalFunc = (e) => {
  e.preventDefault();
  showModal = true;
  if(showModal) {
    modalDiv.style.display = 'block';
  } else {
    showModal = false;
    modalDiv.style.display = 'none';
  }
  showModal = !showModal;
}

modalbtn.addEventListener('click', (e) => modalFunc(e));

modalbtn2.addEventListener('click', (e) => modalFunc(e));

closeModalbtn.addEventListener('click', (e) => {
  modalDiv.style.display = 'none';
});
