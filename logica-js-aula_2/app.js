alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for certeiro...
while(chute != numeroSecreto) {
    chute =  prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa(s)`);
    } else {
        if (numeroSecreto < chute) {
            alert(`O número secreto é menor que ${chute}`);
        }    else{
                alert(`o número secreto é maior ${chute}`);
            }
            //tentativas = tentativas + 1;
            tentativas++;
        }
}


