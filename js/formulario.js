const formulario = document.querySelectorAll("form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);
});
