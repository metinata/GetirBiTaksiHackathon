import mongoose, { Schema } from 'mongoose'

const City = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

export default mongoose.model('City', City);