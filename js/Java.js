document.addEventListener('DOMContentLoaded', () => {

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Scroll reveal
  const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    scrollRevealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add('revealed');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();


  // Modal
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  const openModal = (element) => {
    const img = element.querySelector('img');
    modalImage.src = img.src;
    modal.style.display = 'flex';
  };

  const closeModal = (event) => {
    if (
      event.target.id === 'imageModal' ||
      event.target.classList.contains('modal-close')
    ) {
      modal.style.display = 'none';
    }
  };

  // Add click to all items
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => openModal(item));
  });

  // Close modal
  if (modal) {
    modal.addEventListener('click', closeModal);
  }

});