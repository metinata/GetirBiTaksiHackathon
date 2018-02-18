import * as models from '../models'
import mongoose from 'mongoose'
const
    getOrders = () => {
        return models.Order.find({}).populate('items items.product locationFrom locationTo owner supplier').lean().exec();
    },
    placeOrder = (params) => {
        let order = new models.Order({
            items: params.items,
            owner: params.owner._id,
            supplier: params.supplier._id,
            locationFrom: params.supplier.city._id,
            locationTo: params.owner.city._id
        });

        return order.save();
    },
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
    getOrders,
    placeOrder,
    getCountries,
    getCitiesByCountryId,
    getAvailableUsers,
    getProductsByCityId
}