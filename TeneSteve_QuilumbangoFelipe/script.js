$(document).ready(function () {

  /* =====================================================
     PERSON 1: Toggle Effect
     When clicking the hero button, change the background
     color randomly.
     ===================================================== */

   const btn=document.querySelector('#btn-hero');
   const body = document.querySelector('body');
   btn.addEventListener('click', () => {
   const colors = ['#5f0f40   ', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c'];
   function fondo(){
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      body.style.backgroundColor = randomColor;
   }
   fondo();
  });

  /* =====================================================
     PERSON 2: Image Gallery Modal
     Clicking a gallery image enlarges it in a popup modal.
     ===================================================== */



  /* =====================================================
     PERSON 2: Form Validation
     Validate the fields before submission. If valid,
     show an alert: "Form submitted successfully!"
     ===================================================== */



});