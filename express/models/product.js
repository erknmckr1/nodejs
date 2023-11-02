const products = [
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg",id:"23321"},
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg",id:"13321"},
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg",id:"23421"},
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg",id:"23329"},
  ]

 class Product {
    constructor(name,price,image,description){
        this.id = Math.floor(Math.random()*9999 + 1).toString(); // her ürün için olusturulan nesnede random bir id olacak.  
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }

    saveProduct() {
        products.push(this)
    }

    static getAll(){
        return products
    }

    static getProduct(productId){
        const product = products.find((item) => item.id === productId);
        return product;
    }

    static getUpdate(product){
        const index = products.findIndex(i => product.id === i.id)
        products[index].name = product.name;
        products[index].price = product.price;
        products[index].description = product.description;
        products[index].image = product.image;

    }
    
}

export default Product;
