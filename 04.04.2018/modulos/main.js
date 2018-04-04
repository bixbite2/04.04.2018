import { trimRight } from './text.js'
// console.log('main');
// // teste está dentro de window
// // (objeto global === Browser)

// function teste() {
//     // omitir o var/let/const
//     // coloca no global
//     var msg = 'Hello ';
//     if (true) {
//         // var vale para escopo da função
//         var opa = '!!!';
//         let eita = '???'; // let faz funcionar só dentro do das chaves
//     }
//     console.log(msg + 'teste' + opa); // + eita); se colocar o + eita n funciona
// }

// teste();

// namespace Main (semelhante ao Math);

// const Main = { //JSON: Javascript Object Notation
//     teste: function() {
//         console.log('Main teste');
//     },
//     outra: function() {
//         console.log('outra');
//     },
//     curso: 'INFO'
// };

// Main.nome = "Bruno"; // Ai da de colocar mais coisa dps

// const Outro = {};
// Outro.coisa = 'qualquer';



console.log('|' + trimRight('jjj   '));