const router = require("express").Router();
const userRoutes = require('./users');
const postRoutes = require('./posts');
const workplaceRoutes = require('./workplaces');

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/workplaces", workplaceRoutes);


module.exports = router;