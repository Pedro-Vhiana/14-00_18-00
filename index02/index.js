// função responsável por mostrar o alerta na tela

function mostrarAlerta() {
  const divAlerta = document.getElementById("alerta");
  divAlerta.classList.add("mostrar");
}

function fecharAlerta() {
  const divAlerta = document.getElementById("alerta");
  divAlerta.classList.remove("mostrar");
}

const btnMostrar = document.getElementById("mostrar"); // trazer do html para o JS
const btnFechar = document.getElementById("fechar"); // adicionar ID nos elementos do html.
const btnContador = document.getElementById("contador");

btnMostrar.addEventListener("click", mostrarAlerta);
btnFechar.addEventListener("click", fecharAlerta);
