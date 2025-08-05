// 1. Scroll-to-Top Button
function createScrollUpBtn() {
  let btn = document.createElement('button');
  btn.id = 'scrollUpBtn';
  btn.className = `fixed bottom-8 right-8 z-50 p-3 rounded-full bg-card-bg border-2 border-border-accent shadow-card-glow text-accent-purple hover:bg-accent-purple hover:text-dark-bg hover:border-accent-purple transition duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent-purple`;
  btn.title = 'Scroll to top';
  btn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7"/></svg>`;
  btn.style.display = 'none';
  document.body.appendChild(btn);
  btn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'flex' : 'none';
  });
}

// 3. Animated Typing Effect (for hero title)
function setupTypingHero() {
  const el = document.querySelector('.typing-hero');
  if (!el) return;
  const text = el.getAttribute('data-text') || el.textContent;
  el.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 35);
    }
  }
  type();
}

// 4. Reveal Animations on Scroll
function setupRevealOnScroll() {
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  const reveal = (el) => {
    el.classList.add('opacity-0');
    el.style.transition = 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)';
    el.style.transform = 'translateY(40px)';
  };
  const show = (el) => {
    el.classList.remove('opacity-0');
    el.style.opacity = 1;
    el.style.transform = 'none';
  };
  revealEls.forEach(reveal);
  const onScroll = () => {
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) show(el);
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

// 5. Copy Email to Clipboard
function setupCopyEmail() {
  document.querySelectorAll('.copy-email').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const email = this.getAttribute('href').replace('mailto:', '');
      navigator.clipboard.writeText(email).then(() => {
        this.textContent = 'Copied!';
        setTimeout(() => {
          this.textContent = email;
        }, 1200);
      });
    });
  });
}

// === Init All ===
document.addEventListener('DOMContentLoaded', () => {
  createScrollUpBtn();
  setupTypingHero();
  setupRevealOnScroll();
  setupCopyEmail();
});
