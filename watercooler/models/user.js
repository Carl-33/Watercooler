const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    company: {
        type: String
    },

    location: {
        type: String
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("User", userSchema);

module.export = userModel