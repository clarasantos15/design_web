let dia = prompt("Digite um dia da semana, sendo 1:Domingo - 7:Sábado");
dia = Number(dia);
switch(dia){
    case 1: alert(`Você escolheu domingo`);
    case 1: alert(`Você escolheu segunda`);
    case 1: alert(`Você escolheu terça`);
    case 1: alert(`Você escolheu quarta`);
    case 1: alert(`Você escolheu quinta`);
    case 1: alert(`Você escolheu sexta`);
    case 1: alert(`Você escolheu sábado`);
    default: alert(`Dia inválido`);


}
if(dia <= 0 || dia>= 8){
    alert(`Dia inválido`)
}else if(dia == 1){
    alert(`Você escolheu domingo`);
}else if(dia == 2){
    alert(`Você escolheu segunda`);
}else if(dia == 3){
    alert(`Você escolheu terça`);
}else if(dia == 4){
    alert(`Você escolheu quarta`);
}else if(dia == 5){
    alert(`Você escolheu quinta`);
}else if(dia == 6){
    alert(`Você escolheu sexta`);
}else{
    alert(`Você escoheu sábado`);
}