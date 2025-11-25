let numeroAleatorio = Math.floor(Math.random() * 100);
console.log("Número secreto:", numeroAleatorio); // apenas para testes

function checkGuess() {
  const input = document.getElementById("guessInput");
  const mensagem = document.getElementById("message");
  const body = document.querySelector("body");
  
  const valor = Number(input.value);

  if (valor < 0 || valor > 99 || isNaN(valor)) {
    mensagem.textContent = "Digite um número válido entre 0 e 99!";
    return;
  }

  if (valor === numeroAleatorio) {
    mensagem.textContent = "Parabéns! Você acertou!";
    body.style.setProperty("background-color", "green");
  } else if (valor < numeroAleatorio) {
    mensagem.textContent = "O número é MAIOR!";
    body.style.setProperty("background-color", "red");
  } else {
    mensagem.textContent = "O número é MENOR!";
    body.style.setProperty("background-color", "red");
  }
}