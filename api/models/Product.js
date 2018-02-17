import mongoose, { Schema } from 'mongoose'

const Product = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Product', Product);