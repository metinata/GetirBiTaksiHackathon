import * as models from '../models'
import mongoose from 'mongoose'
const
    getCountries = () => {
        return models.Country
            .find({}, "-cities")
            .lean()
            .exec();
    },
    getCitiesByCountryId = (countryId, cityId) => {
        return models.Country
            .findOne({ _id: countryId }, '-_id -name')
            .populate({ path: 'cities', match: { _id: { $ne: cityId } }, select: ['name'] })
            .lean()
            .exec();
    },
    getAvailableUsers = (cityId) => {
        return models.User
            .aggregate(
                [
                    {
                        "$project": {
                            password: 0
                        }
                    },
                    {
                        "$match": {
                            "destination": mongoose.Types.ObjectId(cityId)
                        }
                    }
                ]
            )
            .exec();
    },
    getProductsByCityId = (cityId) => {
        return models.City.findOne({ _id: cityId }, '-_id -name')
            .populate('products')
            .lean()
            .exec();
    }

export {
    getCountries,
    getCitiesByCountryId,
    getAvailableUsers,
    getProductsByCityId
}