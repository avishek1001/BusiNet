import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    thumbnails: [{
        type: String
    }],
    ratings: [{
        type: Number
    }],
    reviews: [{
        type: String
    }]
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);

export default Product;