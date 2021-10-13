class Products {
    private products: Product[]

    constructor(products: Product[]) {
        this.products = products;
    }

    public getProducts() {
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
}

interface Product {
    name: string,
    price: number,
    id: number
}

export default Products;