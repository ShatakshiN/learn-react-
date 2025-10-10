import { Category } from "../entities/categories.js";
import { AppDataSource } from "../util/db.js";

export const seedCategories = async() =>{
    const categoryRepo = AppDataSource.getRepository('Category');

    const topCategoriesData = [
        {
            category: "Electronics",
            icon_image_url: "https://images.unsplash.com/photo-1595392030002-dd3bcc0ca05a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            category: "Fashion",
            icon_image_url: "https://plus.unsplash.com/premium_photo-1723291231332-9f7739ae413d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            category: "Home Decore",
            icon_image_url : "https://images.unsplash.com/photo-1615529189232-5d380facaf73?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            category: "Beauty",
            icon_image_url: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            category: "Toys, Games & Hobbies",
            icon_image_url: "https://images.unsplash.com/photo-1709768669165-e213f726aa9e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            category: "Sports & Outdoors",
            icon_image_url: "https://images.unsplash.com/photo-1704402496338-185406195639?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            category: "Groceries",
            icon_image_url: "https://images.unsplash.com/photo-1704402496338-185406195639?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            category: "Books & Media", 
            icon_image_url: "https://images.unsplash.com/photo-1751562139894-bae815797081?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    const topCategories: Record<string, Category> = {};

    for (const catData of topCategoriesData) {
        let existing = await categoryRepo.findOne({ where: { category: catData.category } }) as Category | null;

        if (!existing) {
            const newCategory = categoryRepo.create({ ...catData, parent: null });
            existing = await categoryRepo.save(newCategory) as Category;
        }

        topCategories[catData.category] = existing as Category;
    };

    const subCategoriesData =[
        {
            category: "Phones",
            icon_image_url: "",
            parent:"Electronics"
        },
        {
            category: "Phones Accessories",
            icon_image_url: "",
            parent:"Phones"
        },
        {
            category: "Cases & Covers",
            icon_image_url: "",
            parent:"Phones"
        },

        {
            category: 'Computers & More',
            icon_image_url: "",
            parent:"Electronics"
        },
        {
            category: "TV", 
            icon_image_url: "",
            parent: "Electronics"
        },
        {
            category: "Male",
            icon_image_url: "",
            parent: "Fashion"
        },
        {
            category: "Female",
            icon_image_url: "",
            parent: "Fashion"
        },
        {
            category: "Furniture",
            icon_image_url: "",
            parent: "Home Decore"
        },
        {
            category: "Furniture",
            icon_image_url: "",
            parent: "Home Decore"
        },
        {
            category: "Decor",
            icon_image_url: "",
            parent: "Home Decore"
        },
        {
            category: "Lights",
            icon_image_url: "",
            parent: "Home Decore"
        }

    ]
    for (const sub of subCategoriesData) {
        const parentCategory = topCategories[sub.parent]; 

        let existing = await categoryRepo.findOne({ where: { category: sub.category } }) as Category | null;

        if (!existing) {
            const newSubCategory = categoryRepo.create({
                category: sub.category,
                icon_image_url: sub.icon_image_url,
                parent: parentCategory,
            });
            await categoryRepo.save(newSubCategory);
        }
    }

    console.log("Categories and subcategories seeded successfully!");

};