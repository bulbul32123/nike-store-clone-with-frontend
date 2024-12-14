const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    averageRating: {
        type: Number,
        default: 0, // Initially, there is no rating
    },
    reviewCount: {
        type: Number,
        default: 0, // Initially, there are no reviews
    },
    stocks: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    country: {
        type: String,
    },
    sizes: {
        type: Array,
        required: true
    },
    images: {
        type: [String],
        required: [true, "At least one image is required"],
        validate: {
            validator: function (images) {
                return images.length <= 9; // Limit to 5 images
            },
            message: "A maximum of 10 images is allowed!"
        }
    },
    category: {
        type: String,
        required: true,
    },
    is_featured: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: "Just in"
    },
    high_light: {
        type: String,
        default: "Normal"
    }

}, { timestamps: true })


const Product = new model('Product', ProductSchema)
export { Product }