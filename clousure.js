//A closure is the combination of a function bundled together (enclosed) 
//with references to its surrounding state (the lexical environment).
//a function with its lexical scope forms a clousure
let a = 10;
const testClousure = (b) => {
    const c = a + b;
    return c;
}
console.log(testClousure(2));
a = 20;
console.log(testClousure(3));

console.dir(testClousure);