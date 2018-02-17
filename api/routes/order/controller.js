import { orderService } from '../../services'

const
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
        orderService.getAvailableUsers(req.query.id)
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
    getCountries,
    getCitiesByCountryId,
    getAvailableUsers,
    getProductsByCityId
}