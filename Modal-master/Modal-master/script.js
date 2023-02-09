'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  //samo se dodaju na classlist(ime classe) hidden da bi se zatvorili
  //modal i overlayer layer
}

function openModal() {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  //pisemo hidden da bismo uklonili classlist hiddne
  //da se ukloni hidden iz css-a
  //kada se ukloni hidden onda se modal pojavljuje i overlay
  //layer za gasenje modala koji se nalazi iza
}

//Bira koji od 3 modala sam kliknuo
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
//---------------------------------------------------------//
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
