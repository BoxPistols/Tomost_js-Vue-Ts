interface ShopItem {
    name: string;
    price: number;
}

class Fruit implements ShopItem {
    public name: string = '';
    public price: number = 0;
}

class Snack implements ShopItem {
    public name: string = '';
    public price: number = 0;
}