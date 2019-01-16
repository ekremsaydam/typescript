// default parameters
// y function kullanılırken kullanılabilir de kullanılmadığında default değeri 4 kabul edilir.
function topla4(x: number, y: number = 4): number {
    return x + y;
}

console.log(topla4(3, 8));
console.log(topla4(3));

// opsiyonel parametre
// kullanımı ? için kullanılabilir ve kullanılmadığında null ataması yapılır.
// x için soru işareti ile belirtilirse hata meydana gelir. Bundan dolayı en sonra belirtilir 
function topla5(x: number, y?: number): number {
    if (y) {
        return x + y;
    }

    return x;
}

console.log(topla5(3));