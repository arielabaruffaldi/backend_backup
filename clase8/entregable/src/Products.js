export class Products {
    constructor() {
        this.products = []
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find(product => product.id == id)
        if (product) {
            return product
        }
    }

    addProduct(name, price) {
        console.log(this.products)
        this.products.push({
            name: name,
            price: price,
            id: this.products.length + 1
        })
    }
}