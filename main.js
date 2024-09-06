const form = document.getElementById("form");

const peso = document.querySelector("#peso");
const altura =document.querySelector("#altura");
let resultado = document.querySelector('#resultado');

form.addEventListener('submit', function (e){
    e.preventDefault();

 const vlPeso = peso.value; 
    const vlAltura = altura.value;
    const imc= vlPeso/vlAltura ** 2;
  resultado.textContent = `Seu IMC é ${imc.toFixed(1)} ${getClassImc(imc)}`;    

  if(vlPeso == 0||vlAltura== 0) resultado.textContent ="Preencha ambos os valores(Altura e Peso)";

});



function getClassImc (imc){
  const classImc = ['Voce esta em obesidade grau 3', 'Voce esta em obesidade grau 2','Voce esta em obesidade grau1','Voce esta acima do peso',
    'Voce esta com peso normal','Voce esta abaixo do peso', 'Voçe esta muito abaixo do peso' ]
  if(imc >= 39.9)return classImc[0];
  if(imc >=34.9)return classImc[1];
  if(imc >= 29.9)return classImc[2];
  if(imc >= 24.9) return classImc[3];
  if(imc >= 18.4)return classImc[4];
  if(imc < 16.9)return classImc[5];
}