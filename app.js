const fs=require('fs');
const interface=require('readline-sync');


let url= interface.question("Escribe el nombre de tu directorio: ");
console.log("Iniciando lectura");
var files = fs.readdirSync(url);

console.log(files);
console.log("Finalizando lectura");

