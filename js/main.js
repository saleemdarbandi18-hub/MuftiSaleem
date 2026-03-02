document.addEventListener('DOMContentLoaded', () => {
  // Category Filtering Logic for Homepage (Demo implementation)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const fatwaCards = document.querySelectorAll('.fatwa-card');

  if (filterBtns.length > 0 && fatwaCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        fatwaCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'flex';
          } else {
            if (card.getAttribute('data-category') === filterValue) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // Print/PDF functionality for Fatwa Page
  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Mobile Menu Toggle (Basic implementation)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  // Accordion Logic for Classical Fiqh Categories
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const icon = header.querySelector('.acc-icon');

      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = '-';
      } else {
        content.style.maxHeight = null;
        icon.textContent = '+';
      }
    });
  });
});
