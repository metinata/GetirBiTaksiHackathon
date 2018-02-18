import { orderService } from '../../services'

const
    getOrders = (req, res, next) => {
        orderService.getOrders()
            .then(result => {
                res.json(result);
            })
            .catch(e => {
                res.json(e);
            });
    },
    placeOrder = (req, res, next) => {
        orderService.placeOrder(req.body)
            .then(result => {
                res.json(result);
            })
            .catch(e => {
                res.json(e);
            });
    },
    getCountries = (req, res, next) => {
        orderService.getCountries()
            .then(countries => {
                res.json(countries)
            })
            .catch(e => {
                res.json(e);
            })
    },
    getCitiesByCountryId = (req, res, next) => {
        orderService.getCitiesByCountryId(req.query.countryId, req.query.cityId)
            .then(result => {
                res.json(result && result.cities && result.cities.length ? result.cities : [])
            })
            .catch(e => {
                res.json(e);
            })
    },
    getAvailableUsers = (req, res, next) => {
        orderService.getAvailableUsers(req.query.location, req.query.destination)
            .then(users => {
                res.json(users)
            })
            .catch(e => {
                res.json(e);
            })
    },
    getProductsByCityId = (req, res, next) => {
        orderService.getProductsByCityId(req.query.id)
            .then(result => {
                res.json(result && result.products && result.products.length ? result.products : [])
            })
            .catch(e => {
                res.json(e);
            })
    }

export {
    getOrders,
    placeOrder,
    getCountries,
    getCitiesByCountryId,
    getAvailableUsers,
    getProductsByCityId
}