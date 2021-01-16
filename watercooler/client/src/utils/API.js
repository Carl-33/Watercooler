import axios from "axios";

export default {
    // get all users
    getUsers: function() {
        return axios.get("/api/users");
    },
    // gets users with given id
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    // delete user
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
    // add user
    saveUser: function(userData) {
        console.log(userData)
        return axios.post("/api/users", userData)
    },
    // get all workplaces 
    getWorkplaces: function() {
        return axios.get("/api/workplaces");
    },
    // add workplace
    createWorkplace: function(workplaceData) {
        return axios.post("/api/workplaces", workplaceData)
    },
    // get all comments
    getComments: function() {
        return axios.get("/api/posts");
    },
    createComment: function(postData) {
        return axios.post("/api/posts", postData)
    }
};