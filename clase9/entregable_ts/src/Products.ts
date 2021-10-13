class Products {
    private products: Product[]

    constructor(products: Product[]) {
        this.products = products;
    }

    public getProducts(): Product[] {
        return this.products
    }

    public getProductById(id: number): Product {
        const product = this.products.find(product => product.id == id)
        if (product) {
            return product
        }
    }

    public addProduct(name: string, price: number): void {
        this.products.push({
            name: name,
            price: price,
            id: this.products.length + 1
        })
    }

    public updateProduct(id, body): Product {
        const product = this.products.find(product => product.id == id);
        if (body.name) {
            product.name = body.name
        }
        if (body.price) {
            product.price = body.price
        }
        return product;
    }

    public deleteProduct(id: number): void {
        this.products = this.products.filter(item => item.id !== id)
    }
}

interface Product {
    name: string,
    price: number,
    id: number
}

export default Products;