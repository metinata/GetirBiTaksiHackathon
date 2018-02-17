import * as models from '../models'
const
    login = (id) => {
        return models.User
            .findOne({ _id: id }, '-password')
            .populate([{ path: 'city', select: ['name'] }, { path: 'destination', select: ['name'] }])
            .lean()
            .exec();
    },
    users = () => {
        return models.User
            .find({}, '-password')
            .populate([{ path: 'city', select: ['name'] }, { path: 'destination', select: ['name'] }])
            .lean()
            .exec();
    }

export {
    login,
    users
}