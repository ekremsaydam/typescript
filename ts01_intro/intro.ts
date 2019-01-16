function selamVer(isim: string): string {
    return "Merhaba " + isim;
}

let mesaj: string = selamVer("Veli KOŞAR");

console.log(mesaj);

let sayi: number;

sayi = 10;

sayi = 10.4;
// sayi = "Ankara";

let sehir: string = "Adana";
sehir = "Ankara";
sehir = "İstanbul";
// sehir = 10;

let dogruMu: boolean = true;
dogruMu = true;
dogruMu = false;
// dogruMu = 1;

// let sayilar = [1, 2, 3]; // javascript
let sayilar: number[] = [1, 2, 3, 4];
// let sayilar: number[] = [1, 2, 3, 4, "Ankara"];

let sayilar2: Array<number> = [1, 2, 3];

let dizi: [number, string] = [2, "Ankara"]; // tuple
console.log(typeof dizi[0]);
console.log(typeof dizi[1]);

enum Renk { Kırmızı = 1, Siyah, Mavi }

let renk: Renk = Renk.Kırmızı;

console.log(renk);

let deger: any = "Ankara";
deger = 2;
deger = {};

let deger2: void = undefined;

function selamVer2(): void {
    console.log("Merhaba");
}

// undefined null

let yas: number;
yas = 10;


class Musteri{
}

let musteri: Musteri = null;

console.log(musteri);