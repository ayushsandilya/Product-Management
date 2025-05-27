import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    create(body: any): Promise<import("mongoose").Document<unknown, {}, import("./product.schema").Product, {}> & import("./product.schema").Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(query: any): Promise<(import("mongoose").Document<unknown, {}, import("./product.schema").Product, {}> & import("./product.schema").Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./product.schema").Product, {}> & import("./product.schema").Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("./product.schema").Product, {}> & import("./product.schema").Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
