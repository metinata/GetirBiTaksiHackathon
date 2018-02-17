import product_data from './products'
import city_data from './cities'
import country_data from './countries'
import user_data from './users'

import * as models from '../models'

const seed = () => {
    models.Product.findOne({}).exec((error, result) => {
        if(!error && !result) {
            populateProducts(product_data)
                .catch(e => { console.log(e) })
                .then(productList => populateCities(city_data, productList))
                .catch(e => { console.log(e) })
                .then(cityList => populateCountries(country_data, cityList))
                .catch(e => { console.log(e) })
                .then(cityList => populateUsers(user_data, cityList))
                .catch(e => { console.log(e) })
                .then(() => {
                    console.log("Data populated");
                })
                .catch(e => { console.log(e) })
        }
    });
};

const populateProducts = (productList) => {
    return new Promise((resolve, reject) => {
        models.Product.collection.insert(productList, (error, result) => {
            error ? reject(error) : resolve(result.ops);
        });
    });
}
const populateCities = (cityList, productList) => {
    return new Promise((resolve, reject) => {
        let cities = []
        cityList.map((city, index) => {
            productList.slice(index, getRandom(index, productList.length)).map(c => {
                city.products.push(c._id);
            });
            cities.push(city);
        });
        models.City.collection.insert(cities, (error, result) => {
            error ? reject(error) : resolve(result.ops);
        });
    });
}

const populateCountries = (countryList, cityList) => {
    countryList.map((country, index) => {
        let cities = [];
        cityList.filter((city) => city.__ref == country.__ref).map((city) => {
            cities.push(city._id)
        });
        country.cities.push(cities);
    });
    return new Promise((resolve, reject) => {
        models.Country.collection.insert(countryList, (error, result) => {
            error ? reject(error) : resolve(cityList);
        });
    });
}

const populateUsers = (userList, cityList) => {
    return new Promise((resolve, reject) => {
        userList.map((user, index) => {
            let cities = cityList.slice(), //Copy array by value
                city_random = getRandom(0, cities.length),
                dest_random;

            user.city = cities[city_random]._id;
            cities.splice(city_random, 1);

            dest_random = getRandom(0, cities.length);
            user.destination = cities[dest_random]._id;
        });
        models.User.collection.insert(userList, (error, result) => {
            error ? reject(error) : resolve(result);
        });
    });
}

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default {
    seed
}