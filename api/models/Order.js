import mongoose, { Schema } from 'mongoose'

const Order = new Schema({
    items: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    locationFrom: {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    locationTo: {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    deliveryDate: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Order', Order);