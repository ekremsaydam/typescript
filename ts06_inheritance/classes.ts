class Kisi {
    kaydet():void {
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


let musteri:Musteri = new Musteri();
musteri.kaydet();
musteri.satisYap();

let personel: Personel = new Personel();

personel.kaydet();
personel.maasOde();