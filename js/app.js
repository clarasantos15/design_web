var nasc = 2009;
let nome = "Clara";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true;
    }else{
        menor = false;
    }
    alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}`)
    return idade;
}

calcIdade();
/*
alert(`Fora da função : Idade ${idade}`); 
Erro pois a vaiavel let nao existe fora do escopo dela 
*/
alert(`Fora da função : chamando calcIdade ${calcIdade(2027)}`);
