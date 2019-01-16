function topla(x, y) {
    return x + y;
}

function topla2(x: number, y: number): number{
    return x + y;
}


// topla(2, 4);
// topla2(2, 4);

let topla3:Function = (x: number, y: number): number => x + y;

console.log(topla(2, 3));
console.log(topla("Ankara", 2));

console.log(topla2(2, 4));
console.log(topla3(4, 8));