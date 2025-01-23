import { ICrud, IProduct } from "./interfaces";

class ProductList implements ICrud {
    private productList: IProduct[] = [];
    id = 1;
    newDate = new Date()

    createProduct(data: { name: string; price: number; }): IProduct {
        const newProduct: IProduct = {
            id: this.id,
            name: data.name,
            price: data.price,
            createdAt: this.newDate.toDateString(),
            updatedAt: this.newDate.toDateString(),
        }
        this.productList.push(newProduct);
        this.id = this.id + 1;
        return newProduct;
    }
    getProducts(): IProduct[] {
        return this.productList;
    }
    getOneProduct(id: number): IProduct | null {
        const find = this.productList.findIndex( e => e.id == id);
        return this.productList[find];
    }
    updateProduct(id: number, data: Partial<{ name: string; price: number; }>): IProduct {
        const find = this.productList.findIndex( e => e.id == id);
        const updatedProduct = {
            id: id,
            name: data.name ? data.name : this.productList[find].name,
            price: data.price ? data.price : this.productList[find].price,
            createdAt: this.productList[find].createdAt,
            updatedAt: this.newDate.toDateString(),
        };
        this.productList.splice(find, 1, updatedProduct);
        return this.productList[find];
    }
    deleteProduct(id: number): { message: string; } {
        const find = this.productList.findIndex( e => e.id == id);
        this.productList.splice(find, 1);
        return { message: "Product successfully deleted."};
    }
}
export const productList = new ProductList;