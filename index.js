// Menu hambúrguer
const btnHamburger = document.getElementById('btn-hamburger');
const navMenu = document.getElementById('nav-menu');

btnHamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// Modo claro / escuro
const btnToggleTheme = document.getElementById('btn-toggle-theme');
const body = document.body;

function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    btnToggleTheme.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    btnToggleTheme.textContent = '🌙';
  }
}

btnToggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    btnToggleTheme.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    btnToggleTheme.textContent = '🌙';
  }
});

loadTheme();

// Formulário contato com mailto
const form = document.getElementById('form-contato');

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  const subject = encodeURIComponent(`Contato pelo site - ${nome}`);
  const bodyMail = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`);

  const mailtoLink = `mailto:maisonsobmedidas@gmail.com?subject=${subject}&body=${bodyMail}`;

  window.location.href = mailtoLink;
});
