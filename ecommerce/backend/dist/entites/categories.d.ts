import { Product } from "./products.js";
export declare class Category {
    id: number;
    category: string;
    icon_image_url: string;
    is_featured_on_homepage: boolean;
    parent: Category | null;
    children: Category[];
    products: Product[];
}
//# sourceMappingURL=categories.d.ts.map