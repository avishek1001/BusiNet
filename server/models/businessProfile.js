import mongoose from "mongoose";

const businessProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    businesses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Business"
    }],
    contacts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact"
    }
}, {
    timestamps: true
})

const BusinessProfile =  mongoose.model("BusinessProfile", businessProfileSchema);

export default BusinessProfile;