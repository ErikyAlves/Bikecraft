// ativar links do menu

const links = document.querySelectorAll(".header-menu a");

links.forEach(function (link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
    link.style.color = "var(--cor-p1)";
  }
});

// ativar itens do orçamento
const parametros = new URLSearchParams(location.search);
parametros.forEach(function (parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
});
// perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  const ativa = resposta.classList.contains("ativa");
  resposta.classList.toggle("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((img) => {
  img.addEventListener("click", (event) => {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
    const maxMedia = matchMedia("(max-width: 500px)").matches;
    if (maxMedia) {
      galeriaContainer.prepend(img);
    }
  });
});
// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
