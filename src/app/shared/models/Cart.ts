import { Product } from "./Product";


export interface Cart {
    id: number,
    products: (Product & {quantity: number, total: number})[]
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}