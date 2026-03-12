

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-fade');


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

  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  const portfolioImages = document.querySelectorAll('.portfolio-image');

  portfolioImages.forEach(image => {
    image.addEventListener('click', () => {
      const src = image.getAttribute('data-large-src') || image.src;
      const alt = image.alt || '';
      modalContent.innerHTML = `<img src="${src}" alt="${alt}"><p>${alt}</p>`;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const img = element.querySelector('img');
    modalImage.src = img.src;
    modal.style.display = 'flex';
  }

  function closeModal(event) {
    if (event.target.id === 'imageModal' || event.target.classList.contains('modal-close')) {
      document.getElementById('imageModal').style.display = 'none';
    }
  }

  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    if (item.onclick) {
      item.addEventListener('click', () => openModal(item));
    }
  });

  const imageModal = document.getElementById('imageModal');
  if (imageModal) {
    imageModal.addEventListener('click', closeModal);
  }
});