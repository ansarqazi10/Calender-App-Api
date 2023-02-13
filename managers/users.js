let Users = require('../models/users');

const usersManager = {
    create: async data => {
        let user = new Users(data);
        user = await user.save();
        return user;
    },

    get: async () => {
        let users = await Users.find({});
        return users;
    },

    getById: async (id) => {
        let user = await Users.findById(id);
        return user;
    },

    getByEmail: async (body) => {
        let user = await Users.findOne({email: body.email, password: body.password});
        return user;
    },

    update: async (id, data) => {
        let user = await Users.findByIdAndUpdate(id, data, { new: true });
        return user;
    },

    delete: async (id) => {
        let user = await Users.findByIdAndDelete(id);
        return user;
    }
}

module.exports = usersManager;   