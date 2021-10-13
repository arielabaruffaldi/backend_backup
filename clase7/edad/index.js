var moment = require('moment');

const actualDate = moment()

const birthDate = moment("1996-05-31")


console.log(`Hoy es ${actualDate.format("DD/MM/YYYY")}`)
console.log(`Nací el ${birthDate.format("DD/MM/YYYY")}`)

console.log(`Desde mi nacimiento han pasado ${actualDate.diff(birthDate, 'days')} días`)

console.log(`Desde mi nacimiento han pasado ${actualDate.diff(birthDate, 'years')} años`)
