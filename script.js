document.addEventListener('DOMContentLoaded', () => {
  // Add smooth fade-in animation to sections as they scroll into view
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // observer.unobserve(entry.target); // Optional: stop observing once visible
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    sectionObserver.observe(section);
  });

  // Add CSS class for visibility
  const style = document.createElement('style');
  style.textContent = `
    section.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // CTA button interaction
  const ctaBtn = document.querySelector('.btn-primary');
  ctaBtn.addEventListener('click', () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('sec11');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
      
      // Highlight price box temporarily
      setTimeout(() => {
        const priceBox = pricingSection.querySelector('.price-box');
        priceBox.style.transform = 'scale(1.05)';
        priceBox.style.transition = 'transform 0.3s';
        priceBox.style.boxShadow = '0 0 20px rgba(250, 225, 0, 0.5)';
        
        setTimeout(() => {
          priceBox.style.transform = 'scale(1)';
          priceBox.style.boxShadow = 'none';
        }, 500);
      }, 800);
    }
  });
});
