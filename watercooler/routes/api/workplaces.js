const router = require('express').Router();
const companyController = require("../../controllers/companyController");

// Matches with "api/users"
router
    .route("/")
    .get(companyController.findAll)
    .post(companyController.create);


//  Matches with "api/users/:id"
router 
    .route("/:id")
    .get(companyController.findById)
    .put(companyController.update)
    .delete(companyController.remove);

module.exports = router;


