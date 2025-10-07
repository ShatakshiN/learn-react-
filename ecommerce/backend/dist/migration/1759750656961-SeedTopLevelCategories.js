import { Category } from "../entities/categories.js";
import { AppDataSource } from "../util/db.js";
export class SeedTopLevelCategories1700000000000 {
    async up(queryRunner) {
        const categories = [
            {
                category: 'Electronics & Gadgets',
                icon_image_url: 'https://images.unsplash.com/photo-1595392030002-dd3bcc0ca05a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                is_featured_on_homepage: true
            },
            {
                category: 'Fashion & Apparel',
                icon_image_url: 'https://plus.unsplash.com/premium_photo-1723291231332-9f7739ae413d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                is_featured_on_homepage: true
            },
            {
                category: 'Home & Kitchen',
                icon_image_url: 'https://images.unsplash.com/photo-1615529189232-5d380facaf73?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                is_featured_on_homepage: true
            },
            {
                category: 'Beauty & Personal Care',
                icon_image_url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                is_featured_on_homepage: true
            },
            {
                category: 'Toys, Games & Hobbies',
                icon_image_url: "https://images.unsplash.com/photo-1709768669165-e213f726aa9e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                is_featured_on_homepage: true
            },
            {
                category: 'Sports & Outdoors',
                icon_image_url: "https://images.unsplash.com/photo-1705585850747-690a897a3135?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                is_featured_on_homepage: true
            },
            {
                category: ' Groceries',
                icon_image_url: "https://plus.unsplash.com/premium_photo-1661281245863-811c2d10106b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                is_featured_on_homepage: true
            },
            {
                category: 'Books & Media',
                icon_image_url: "https://images.unsplash.com/photo-1621414154392-4eb9ee0b6f57?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                is_featured_on_homepage: true
            }
        ];
        const sql = `
            INSERT INTO categories (category, icon_image_url, is_featured_on_homepage, parent_category_id) 
            VALUES 
            ${categories.map(c => `('${c.category}', '${c.icon_image_url}', ${c.is_featured_on_homepage}, NULL)`).join(', ')}
        ;`;
        await queryRunner.query(sql);
    }
    async down(queryRunner) {
        const categories = [
            'Electronics & Gadgets',
            'Fashion & Apparel',
            'Home & Kitchen',
            'Beauty & Personal Care',
            'Toys, Games & Hobbies',
            'Sports & Outdoors',
            'Groceries',
            'Books & Media'
        ];
        const sql = `
            DELETE FROM categories 
            WHERE category IN (${categories.map(c => `'${c}'`).join(', ')}) 
            AND parent_category_id IS NULL
        ;`;
        await queryRunner.query(sql);
    }
}
//# sourceMappingURL=1759750656961-SeedTopLevelCategories.js.map