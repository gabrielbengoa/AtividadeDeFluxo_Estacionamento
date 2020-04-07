var veiculo = prompt("Qual é o seu tipo de veículo?");
var tempo = prompt("Quantas horas ele esteve estacionado?");

veiculo = veiculo.toLowerCase();

if (veiculo == "carro") {
  alert("Você deve pagar R$ " + tempo * 2);
} else if (veiculo == "onibus") {
  alert("Você deve pagar R$ " + tempo * 3);
} else {
  alert("Você deve pagar R$ " + tempo * 4);
}
