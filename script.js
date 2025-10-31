const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
const menu = document.querySelector('#primary-menu');

if (navToggle && nav && menu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
}

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('open');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        otherAnswer.style.maxHeight = null;
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      }
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      question.setAttribute('aria-expanded', 'true');
    } else {
      item.classList.remove('open');
      answer.style.maxHeight = null;
      question.setAttribute('aria-expanded', 'false');
    }
  });
});

const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const waitlistForm = document.querySelector('.waitlist-form');
if (waitlistForm) {
  waitlistForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = waitlistForm.name.value.trim();
    const tier = waitlistForm.tier.options[waitlistForm.tier.selectedIndex].text;
    const message = name
      ? `Thanks, ${name}. We'll let you know when a spot opens in the ${tier} tier.`
      : `Thanks for your interest. We'll let you know when a spot opens in your selected tier.`;
    alert(message);
    waitlistForm.reset();
  });
}
