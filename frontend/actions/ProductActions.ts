import { Product } from "@/types/product";
import { fetchWrapper } from "@/utils/fetchWrapper";

export class ProductActions {

    static url = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;

    // method field
    static async getAll():Promise<Product[]> {
        const res = await fetchWrapper(ProductActions.url, {
            method: 'GET',
        });
        return res;
    }

    // createProduct method
    static async create(product: Partial<Product>) {
        const res = await fetchWrapper(ProductActions.url, {
            method: 'POST',

            body: JSON.stringify(product),
        });
        return res;
    }
}