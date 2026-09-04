let vezes = Number(prompt("Digite o número de vezes:"));
for (let i = 1; i<=vezes; i++){
    if (vezes >100){
        alert("Valor inválido, digite de valor de 0 a 100");
        break // quebra totalmente o bloco de repetição
    }
    alert(`Contei ${i} vez`);
    if (i%2!=0){ // é impar?
        continue; // se impar, continue = voltar para o inicio
    }
    alert(`${i} é par`);
}