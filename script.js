"use strict";
// Mantém o destino original e encaminha os parâmetros de origem da visita.
document.querySelectorAll("a.checkout").forEach((link) => {
  const url = new URL(link.href);
  new URLSearchParams(window.location.search).forEach((value, key) => url.searchParams.set(key, value));
  link.href = url.toString();
});
// O botão fixo aparece após o primeiro botão sair da tela.
const sticky = document.querySelector(".sticky");
const first = document.querySelector(".hero .cta");
if (sticky && first && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(([entry]) => {
    sticky.classList.toggle("visible", !entry.isIntersecting && entry.boundingClientRect.bottom < 0);
  });
  observer.observe(first);
} else if (sticky) sticky.classList.add("visible");

// Evita que duas amostras toquem simultaneamente.
const samples = document.querySelectorAll('.sample-video video');
samples.forEach(video => video.addEventListener('play', () => {
  samples.forEach(other => { if (other !== video) other.pause(); });
}));
