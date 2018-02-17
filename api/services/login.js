import * as models from '../models'
const
    login = (user) => {

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