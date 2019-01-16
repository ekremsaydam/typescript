class Ev {
    odaSayisi: number;
    pencereSayisi: number;
    kat: number;

    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }

    yemekYe(): void {
        console.log(this.kat + " Katlı evde yemek yenildi.");
    }
}


let ev:Ev = new Ev(3, 4, 5);
ev.yemekYe();

console.log(ev.kat);