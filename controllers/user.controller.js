const User = require('../models/user.model');

class UserController {
    static getAll = (req, res) => {
        User.find().then(users => {
            if(!users.length) {
                return res.json({
                    "message": "users is empty"
                })
            }

            return res.json({ users });
        })
    }
}

module.exports = UserController;