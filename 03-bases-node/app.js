const fs = require('fs');

let base = 5;
let data1 = '';

for (let i = 1; i < 11; i++) {
  data1 += `${base} x ${i} = ${base * i} \n`;
}


const data = new Uint8Array(Buffer.from(data1));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});