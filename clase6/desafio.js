const fs = require('fs').promises;

class Archivo {
    constructor(fileName) {
        this.fileName = fileName;
        this.products = []
    }

    async guardar(title, price, thumbnail) {
        try {
            this.products.push({
                title: title,
                price: price,
                thumbnail: thumbnail,
                id: this.products.length + 1
            })
            await fs.writeFile(this.fileName, JSON.stringify(this.products, null, "\t"))
        }

        catch (error) {
            console.log(error)
        }
    }

    async leer() {
        try {
            const readedFile = await fs.readFile(this.fileName, 'utf-8')
            console.log(readedFile)
        } catch (err) {
            console.log(err)
            console.log([])
        }
    }

    async eliminar() {
        try {
            await fs.unlink(this.fileName)
            console.log("borrado")
        } catch (error) {
            console.log(`error en el borrado: ${error}`)
        }
    }
}

const productsFile = new Archivo('products.txt')

async function programa() {
    await productsFile.guardar('Playstation', 100, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/1280px-PSX-Console-wController.pngail")
    await productsFile.guardar("Nintendo 64", 150, "https://as.com/meristation/imagenes/2021/06/27/reportajes/1624775678_021044_1624775732_sumario_grande.jpg")
    await productsFile.guardar("Sega Genesis", 50, "https://upload.wikimedia.org/wikipedia/commons/6/6a/Sega-Genesis-Mk2-6button.jpg")
    productsFile.leer()
}
//productsFile.eliminar()
programa()