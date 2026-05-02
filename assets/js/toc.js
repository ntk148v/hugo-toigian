export function initTOC() {
  const container = document.getElementById('floating-toc');
  if (!container) return;

  const expanded = document.getElementById('toc-expanded');
  const barsContainer = document.getElementById('toc-bars');
  if (!expanded || !barsContainer) return;

  const links = expanded.querySelectorAll('a');
  
  // 1. Generate Bars
  links.forEach((link, index) => {
    const bar = document.createElement('div');
    bar.className = 'toc-bar';
    bar.dataset.index = index;
    // Indent h3 bars slightly if needed
    const li = link.parentElement;
    if (li.parentElement.parentElement.tagName === 'LI') {
      bar.style.marginLeft = '4px';
      bar.style.width = '12px';
    }
    barsContainer.appendChild(bar);
  });

  const bars = barsContainer.querySelectorAll('.toc-bar');

  // 2. Scroll Spy
  const headingIds = Array.from(links).map(link => link.getAttribute('href').substring(1));
  const headings = headingIds.map(id => document.getElementById(id)).filter(h => h);

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const activeIndex = headingIds.indexOf(id);
        
        // Update Active States
        links.forEach(l => l.classList.remove('active'));
        bars.forEach(b => b.classList.remove('active'));
        
        if (activeIndex !== -1) {
          links[activeIndex].classList.add('active');
          bars[activeIndex].classList.add('active');
        }
      }
    });
  }, observerOptions);

  headings.forEach(h => observer.observe(h));

  // 3. Toggle Expansion on Click (Accessibility/Mobile)
  container.addEventListener('click', (e) => {
    // Prevent toggle if clicking a link
    if (e.target.tagName === 'A') return;
    container.classList.toggle('is-expanded');
  });
}
