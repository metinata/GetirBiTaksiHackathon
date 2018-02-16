import mongoose, { Schema } from 'mongoose'

const Country = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    cities: [{ type: Schema.Types.ObjectId, ref: 'City' }]
});

export default mongoose.model('Country', Country);