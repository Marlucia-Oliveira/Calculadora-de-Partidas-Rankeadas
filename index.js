//Calcular o saldo de rankeadas
//determinar o nivel com base no saldo de vitórias
// Retornar o resultado como objeto
// Chamando a função
// exemplo do uso da função

function calcularNivelRankeado(vitorias,derrotas) {
  let saldoVitorias = vitorias - derrotas;
    
  let nivel;

if (vitorias < 10){
nivel = "Ferro";
}
    
else if (vitorias <= 20){
nivel = "Bronze";
}
    
else if (vitorias <= 50){
nivel = "prata";
}
    
else if (vitorias <= 80){
nivel = "Ouro";
}
    
else if (vitorias <= 90){
nivel = "Diamante";
}
    
else if (vitorias <= 100){
nivel = "Lendário";
}
    
else {
nivel = "Imortal";
}

return {
  saldoVitorias: saldoVitorias,
  nivel: nivel
  };
}

exibirMensagem();

function exibirMensagem() {
  let resultadoMarlucia = calcularNivelRankeado(90, 10);
  console.log(`O Herói Marlucia tem um saldo de ${resultadoMarlucia.saldoVitorias} e está no nível de ${resultadoMarlucia.nivel}`);
}