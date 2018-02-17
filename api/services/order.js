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
    getAvailableUsers = (location, destination) => {
        return models.User
            .find({ city: location, destination: destination })
            .populate('city destination')
            .lean()
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