class Kisi {
    private _isim: string;
    get isim(): string {
        return "Sayın " + this._isim;
    }

    set isim(ad: string) {
        this._isim = ad;
    }

    kaydet(): void {
        console.log("Kişi kaydedildi");
    }
}

class Musteri extends Kisi {
    satisYap(): void {
        console.log("Satış yapıldı");
    }
}

class Personel extends Kisi {
    maasOde(): void {
        console.log("Maaş öde");
    }
}

let musteri: Musteri = new Musteri();
musteri.isim = "Veli KOŞAR";

console.log(musteri.isim);