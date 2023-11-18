// Botão Navbar

function toggleMenu() {
  var menuToggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.menu');
  var overlayBody = document.querySelector('.overlay-body');

  if (menu.classList.contains('active')) {
    menu.style.animation = 'slideUp 0.6s forwards';
    setTimeout(function () {
      menu.style.display = 'none';
      overlayBody.style.display = 'none';
    }, 400);
  } else {
    menu.style.display = 'block';
    menu.style.animation = 'slideDown 0.6s forwards';
    overlayBody.style.display = 'block';
  }

  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}


// Animação na seção Banner

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".fade");

  setTimeout(function () {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }, 10);
});

// Animação no texto da seção Sobre Mim

const text = document.querySelector('.text');

window.addEventListener('scroll', () => {
  const scrollP = window.scrollY;
  const sectionT = text.offsetTop;

  if (scrollP > sectionT - window.innerHeight / 1.2) {
    text.style.left = '0';
  } else {
    text.style.left = '-100%';
  }
});

// Animação da seção Conhecimentos

const square = document.querySelector('.square');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const sectionTop = document.querySelector('.img-sks').offsetTop;

  if (scrollPosition > sectionTop - window.innerHeight / 1.2) {
    square.style.right = '0%';
  } else {
    square.style.right = '-100%';
  }
});

// Animação da seção Contato

window.addEventListener('scroll', function () {
  var centerSquare = document.querySelector('.center-square');
  var section = document.querySelector('.contact');

  var sectionTop = section.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (sectionTop < windowHeight / 2) {
    centerSquare.classList.add('show');
  } else {
    centerSquare.classList.remove('show');
  }
});

// Animação das Seções

window.addEventListener('scroll', function () {
  const section1 = document.querySelector('.animate-section1');
  const section1Pos = section1.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1;

  if (section1Pos < screenPos) {
    section1.classList.add('animated');
  }

  const section2 = document.querySelector('.animate-section2');
  const section2Pos = section2.getBoundingClientRect().top;

  if (section2Pos < screenPos) {
    section2.classList.add('animated');
  }
  const section3 = document.querySelector('.animate-section3');
  const section3Pos = section3.getBoundingClientRect().top;

  if (section3Pos < screenPos) {
    section3.classList.add('animated');
  }
});
