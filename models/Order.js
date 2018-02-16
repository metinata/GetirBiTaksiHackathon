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
            default: 1,
            required: true
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
        default: Date.now,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    isDelivered: {
        type: Boolean,
        default: false
    }
});

Order.pre('save', (next) => {
    /*
        #TODO
            -Check whether user quota available or not!
    */
});

export default mongoose.model('Order', Order);