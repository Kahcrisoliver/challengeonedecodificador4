var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function limpaCampos() {
  if (entradaTexto.value.length === 0) {
    saidaTexto.innerHTML = "Ops, parece que você ainda não digitou!";
  } else {
    entradaTexto.value = "";
    saidaTexto.innerHTML = "Mensagem apagada! Quer tentar de novo?";
  }
}