import mongoose, { Schema } from 'mongoose'

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        default: '123456' //Hash passwords with salt!
    },
    phone: {
        type: String
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    destination: {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    address: {
        type: String,
        required: true,
        default: 'Baker Street 221B' //Required for delivery but negligible for now
    },
    quota: {
        type: Number,
        required: true
    }
});

export default mongoose.model('User', User);