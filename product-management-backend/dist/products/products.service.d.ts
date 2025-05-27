import { Model } from 'mongoose';
import { Product } from './product.schema';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    create(data: Partial<Product>): Promise<import("mongoose").Document<unknown, {}, Product, {}> & Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(query?: any): Promise<(import("mongoose").Document<unknown, {}, Product, {}> & Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Product, {}> & Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, data: Partial<Product>): Promise<import("mongoose").Document<unknown, {}, Product, {}> & Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
