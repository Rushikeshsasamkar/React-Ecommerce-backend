const mongoose = require("mongoose");
require("dotenv").config();

const Category = require("./models/category");
const Product = require("./models/products");
const data = require("./data.json");

async function restoreProducts() {
    await mongoose.connect(''mongodb+srv://technicalprogramming111:bZl3Qv3K1cL1we8v@cluster0.pwauodx.mongodb.net/test/products/, {});

    await Category.deleteMany({});
    await Product.deleteMany({});

    for (let category of data) {
        const { _id: categoryId } = await new Category({
            name: category.name,
            image: category.image,
        }).save();
        const products = category.products.map((product) => ({
            ...product,
            category: categoryId,
        }));
        await Product.insertMany(products);
    }

    mongoose.disconnect();

    console.info("Database Filled/Restored Successfully!!");
}

restoreProducts();
