/* 
Instruções do exercício:

Crie uma variável para armazenas o nome e a quantidade de experiência (XP)
de um herói, depois utilize uma estrutura de decisão para apresentar alguma das
mensagens abaixo:

Se XP for menor que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

Ao final deve-se exibir uma mensagem:
"O herói de nome [user] está no elo [elo]" 
*/

//Variáveis
let user = "Zed";
let xp = 9637;
let elo;

// Estrutura de decisão escolhida: condicionais
if (xp <= 1000) {
  elo = "Ferro";
} else if (xp <= 2000) {
  elo = "Bronze";
} else if (xp <= 5000) {
  elo = "Prata";
} else if (xp <= 7000) {
  elo = "Ouro";
} else if (xp <= 8000) {
  elo = "Platina";
} else if (xp <= 9000) {
  elo = "Ascendente";
} else if (xp <= 10000) {
  elo = "Imortal";
} else if (xp >= 10001) {
  elo = "Radiante";
} else {
  elo = "Sem Rank";
}

console.log(`O herói ${user} está no elo ${elo}.`);
