import { Product } from "./products.js";
export declare class Category {
    id: number;
    category: string;
    icon_image_url: string;
    parent: Category | null;
    children: Category[];
    products: Product[];
}
//# sourceMappingURL=categories.d.ts.map