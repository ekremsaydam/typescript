class Ev {
    private odaSayisi: number;
    private pencereSayisi: number;
    public kat: number;

    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }

    yemekYe(): void {
        console.log(this.kat + " Katlı evde yemek yenildi.");
    }
}


let ev: Ev = new Ev(3, 4, 5);
ev.yemekYe();

// console.log(ev.kat);


class Kisi {
    // private isim: string;
    protected isim: string;
    // public isim: string;
    kaydet(): void {
        console.log("Kişi kaydedildi");
    }
}

class Musteri extends Kisi {
    satisYap(): void {
        console.log("Satış yapıldı");
        // this.isim // protected olan erişilir.
    }
}

class Personel extends Kisi {
    maasOde(): void {
        console.log("Maaş öde");
    }
}

let kisi: Kisi = new Kisi();
// kisi.