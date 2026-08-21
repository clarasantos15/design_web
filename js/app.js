var nasc = 2009;
let nome = "Clara";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert(`Dentro de Função - Idade ${idade}`);
    return idade;
}

calcIdade();
/*
alert(`Fora da função : Idade ${idade}`); 
Erro pois a vaiavel let nao existe fora do escopo dela 
*/
alert(`Fora da função : chamando calcIdade ${calcIdade(2027)}`);
