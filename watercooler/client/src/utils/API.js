import axios from "axios";

export default {
    // get all users
    getUsers: function() {
        return axios.get("/api/users");
    },
    // gets users with given id
    getUser: function(id) {
        return axios.get("/pi/users/" + id);
    },
    // delete user
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
    saveUser: function(userData) {
        return axios.post("api/users", userData)
    }
};