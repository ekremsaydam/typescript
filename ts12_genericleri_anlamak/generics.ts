function deger(x: number): number {
    return x;
}

function deger2(x: string): string {
    return x;
}

let sayi: number = deger(10);
let sehir: string = deger2("Ankara");

console.log(sayi);
console.log(sehir);


// farklı tiplerle aynı işlemleri yapmak için genericler kullanılabilir.
function deger3<T>(x: T): T {
    return x;
}

let sayi3: number = deger3<number>(2);
let sehir3: string = deger3<string>("Ankara");

// genericleri class içinde de kullanabiliriz.

class GenericClass<T> {
    degisken: T;

    fonsiyon(parametre: T): T {
        return parametre;
    }
}


let sinif: GenericClass<string> = new GenericClass<string>();
sinif.fonsiyon("Ankara");