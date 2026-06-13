

function addTwoNumbers(v1, v2, universe) {
    const solution = v1 + v2;
    universe(v1, v2, solution);
}

addTwoNumbers(5, 4, (v1, v2, solution) => {
    console.log(`The vaue of adding ${v1} and ${v2}, is ${solution}`);
});

console.log(document)
