import { Product } from "./products.js";
import { VariantAttributeValue } from "./variantAttributeValues.js";
import { ProductImage } from "./productImage.js";
export declare class ProductVariant {
    id: number;
    SKU: string;
    price: number;
    stock: number;
    product: Product;
    attributeValues: VariantAttributeValue[];
    images: ProductImage[];
}
//# sourceMappingURL=productVariants.d.ts.map