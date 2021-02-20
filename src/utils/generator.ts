/**
 * Cuando una función tiene el operador `*`
 * presente después de la palabra reservada `function`,
 * significa que es un generador.
 */
function* tryCounter() {
    let index = 0;

    while (index < 4) {
        yield index++;
    }
}

let secureTry = tryCounter();

console.log(secureTry.next());
console.log(secureTry.next());
console.log(secureTry.next());
console.log(secureTry.return());
console.log(secureTry.next());
console.log(secureTry.next());