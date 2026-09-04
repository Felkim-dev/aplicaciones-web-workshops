$(document).ready(function () {

  /* =====================================================
     PERSON 1: Toggle Effect
     When clicking the hero button, change the background
     color randomly.
     ===================================================== */



  /* =====================================================
     PERSON 2: Image Gallery Modal
     Clicking a gallery image enlarges it in a popup modal.
     ===================================================== */

    $('.gallery-img').on('click', function () {
    const src = $(this).attr('src');
    const alt = $(this).attr('alt');
    $('#modal-img').attr('src', src).attr('alt', alt);
    $('#image-modal').css('display', 'flex');
    });

    $('#modal-close').on('click', function () {
    $('#image-modal').css('display', 'none');
    });

    $('#image-modal').on('click', function (e) {
    if (e.target === this) {
        $(this).css('display', 'none');
    }
    });

  /* =====================================================
     PERSON 2: Form Validation
     Validate the fields before submission. If valid,
     show an alert: "Form submitted successfully!"
     ===================================================== */

    $('#contact-form').on('submit', function (e) {
    e.preventDefault();

    const name = $('#input-name').val().trim();
    const email = $('#input-email').val().trim();
    const message = $('#input-message').val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    this.reset();
    });

});