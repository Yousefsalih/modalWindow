'use strict';

const modal = document.querySelector('.modal'); //#1 store in variables
const overlay = document.querySelector('.overlay'); //#1
const btnCloseModal = document.querySelector('.close-modal'); //#1
const btnsOpenModal = document.querySelectorAll('.show-modal'); // #1 All elements with the class
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) //#2 loop through each iteration. We want to react to each of the buttons "Show Modal 1, 2, 3"
    btnsOpenModal[i].addEventListener(('click'), function(){ //#3 add an event handler or listener to each one once it is clicked
        console.log('Button Clicked'); //check to see if the button is being clicked
        modal.classList.remove('hidden'); //#4 show the modal boxes
        overlay.classList.remove('hidden')// #5 show the overlay
    });

const closeModal = function () { //#9 create function to follow principles of DRY
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', function() { //#6 trigger event to activate the close button and remove the boxes and overlay
    modal.classList.add('hidden'); //#7 add the class again to hide it
    overlay.classList.add('hidden');//#7
});

//#8 trigger event so that the background can work as the close button as well
overlay.addEventListener('click', closeModal //#9 add function closeModal. Whenever the click happens, please call the function.
  //function(){
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');}
);

document.addEventListener('keydown', function(e) {
  //#10 create a function to make the escape button exit the modal. When the event occurs (a key is pressed), JavaScript will call this function with the event object as an arguemnt 'e'.
  console.log('A key was pressed'); //See if it works
  console.log(e); //See the event object
  console.log(e.key); //Show the key that is being pressed
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //#14 to aggregate it to make it DRY
    closeModal();
  }
  //The If statement below is the same as the above condition but much cleaner
  // if (e.key === 'Escape') { //#11 Create the condition for the esc button. If it is the Escape key then...
  //     if(!modal.classList.contains('hidden')) { //#12 if the modal is not hidden or does not contain the hidden class. modal.classList.contains('hidden') means it is currently hidden
  //         closeModal(); //#13 then close the modal (line 16)
  //     }

  // }
});