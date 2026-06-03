document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  const submitButton = document.getElementById('submit-btn');

  if (menuToggle && mobileMenu) {
    const setMenuState = (isOpen) => {
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.classList.toggle('hidden', !isOpen);
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenuState(false);
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      // Prevent the traditional browser page reload/redirect
      event.preventDefault();

      // Update button state to show execution activity
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'TRANSMITTING...';
      submitButton.disabled = true;

      // Extract the form elements data values
      const formData = new FormData(contactForm);

      try {
        // Send async POST request directly to the FormSubmit API
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success Callback: Swap UI states cleanly
          contactForm.classList.add('hidden');
          successMessage.classList.remove('hidden');
        } else {
          throw new Error('Network response failure.');
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert('Transmission failed. Please double-check your connection or reach out directly.');
        
        // Restore button architecture on failure state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }
    });
  }
});
