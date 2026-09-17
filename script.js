const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const navLinks = document.querySelectorAll('#site-nav a');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}));

const form = document.querySelector('#survey-form');
const result = document.querySelector('#form-result');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const siteType = data.get('siteType');
  const service = data.get('service');
  const location = data.get('location');
  const timing = data.get('timing') || 'timing to be agreed';
  const heading = document.createElement('strong');
  heading.textContent = 'Your local survey brief is ready.';
  const summary = document.createTextNode(` ${siteType} — ${service} in ${location}. Preferred timing: ${timing}. This concept has not sent any information.`);
  result.replaceChildren(heading, summary);
  result.hidden = false;
  result.focus();
});
