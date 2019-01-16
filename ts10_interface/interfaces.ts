interface IProduct {
    id: number;
    name: string;
    unitPrice: number;
}

function save(product: IProduct): void {
    console.log(product.name + " kaydedildi");
}

// bütün değerleri zorunlu tutmak için interface
save({
    id: 1,
    name: "Laptop",
    unitPrice: 1000
});

class Product2 {
    id: number;
    name: string;
    unitPrice: number;
}
function save2(product: Product2): void {
    console.log(product.name + " kaydedildi");
}

let mouse:Product2 = new Product2();
mouse.name = "ATech";
// tek bir product için de işlem yapılacaksak class kullanılır.
save2(mouse);


interface IPersonService {
    save(): void;
}

class CustomerService implements IPersonService {
    save(): void {
        console.log("Kaydedildi.");
    }

}