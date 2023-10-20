const products = [
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg"},
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg"},
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg"},
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg"},
  ]

 class Product {
    constructor(name,price,image,description){
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
}

export default Product;
