const router = require('express').Router();
const postController = require("../../controllers/postController");

// Matches with "api/users"
router
    .route("/")
    .get(postController.findAll)
    .post(postController.create);


//  Matches with "api/users/:id"
router 
    .route("/:id")
    .get(postController.findById)
    .put(postController.update)
    .delete(postController.remove);

module.exports = router;


