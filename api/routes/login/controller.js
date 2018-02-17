import { loginService } from '../../services'

const
    login = (req, res, next) => {
        loginService.login(req.body._id)
            .then(result => {
                res.json(result);
            })
            .catch(error => {
                res.json(error);
            });
    },
    users = (req, res, next) => {
        loginService.users()
            .then(result => {
                res.json(result);
            })
            .catch(error => {
                res.json(error);
            });
    };

export {
    login,
    users
}