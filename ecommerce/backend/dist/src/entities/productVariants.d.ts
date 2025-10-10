import { Product } from "./products.js";
import { VariantAttributeValue } from "./variantAttributeValues.js";
import { ProductImage } from "./productImage.js";
import { CartItem } from "./cartItems.js";
import { OrderItem } from "./orderItems.js";
export declare class ProductVariant {
    id: number;
    SKU: string;
    price: number;
    stock: number;
    product: Product;
    attributeValues: VariantAttributeValue[];
    images: ProductImage[];
    cartItems: CartItem[];
    orderItems: OrderItem[];
}
//# sourceMappingURL=productVariants.d.ts.map