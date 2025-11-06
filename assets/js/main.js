    // MAIL VALIDATION //
    const emailInput = document.querySelector('.email-input');
    const emailWrapper = document.querySelector('.email-wrapper');
    const submitBtn = document.querySelector('.submit-btn');

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    submitBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const email = emailInput.value.trim();
     
      if (email.length === 0 || !validateEmail(email)) {
        emailWrapper.classList.add('error');
      } else {
        emailWrapper.classList.remove('error');
        console.log('Email válido:', email);
        alert('Te has suscrito correctamente');
      }
    });

    emailInput.addEventListener('input', function() {
      if (emailWrapper.classList.contains('error')) {
        emailWrapper.classList.remove('error');
      }
    });

    // DINAMIC ARIA BTNS //
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.featurebuttons label');
  const radios = document.querySelectorAll('.featurebuttons input[type="radio"]');

  radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      tabs.forEach((tab, i) => {
        if (i === index) {
          tab.setAttribute('aria-selected', 'true');
        } else {
          tab.setAttribute('aria-selected', 'false');
        }
      });
    });
  });
});
