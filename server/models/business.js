import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Business = mongoose.model("Business", businessSchema);

export default Business;