const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: Number,
    },
    medicine: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    }
});

const loginSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})
module.exports = {
    Seller: mongoose.model("seller", sellerSchema),
    Login: mongoose.model("login", loginSchema)
}
// module.exports = {Seller, Login} = {}