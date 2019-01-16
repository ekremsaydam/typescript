// rest => parametre olarak alınacak parametre sayısı belli değilse kullanılır.
function davetEt(ilkDavetli: string, ...digerleri: string[]):string {
    return ilkDavetli + " " + digerleri.join(" ");
}

function davetEt2(...digerleri: string[]):string {
    return digerleri.join(" ");
}

console.log(davetEt("Veli", "Ahmet", "Salih"));
console.log(davetEt2("Veli", "Ahmet", "Salih"));
console.log(davetEt2()); // rest fonksiyonlarda değer vermek zorunluluğu yoktur.