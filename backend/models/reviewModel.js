
const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    product_review: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        validate: {
            validator: function (images) {
                return images.length <= 4; // Limit to 5 images
            },
            message: "A maximum of 5 images is allowed!"
        }
    },
    rating: {
        type: Number,
        required: true
    }
}, { timestamps: true })


const Review = new model('Review', ReviewSchema)
export { Review }