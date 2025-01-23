export interface IProduct{
    id: number;
    name: string;
    price: number;
    createdAt: string;
    updatedAt: string;
}
type onlyNamePrice = Pick<IProduct, "name" | "price">;
type objectNamePrice = Partial<onlyNamePrice>
type objMessage = { message: string; };
export interface ICrud{
    createProduct(data: onlyNamePrice ): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: number): IProduct | null;
    updateProduct(id: number, data: objectNamePrice): IProduct;
    deleteProduct(id:number): objMessage;
}