// Import express
const express = require("express");

// Import books-controller
const lectureRoutes = require("./../controllers/lecture-controller");

// Create router
const router = express.Router();

router.get("/:lectureid/students", lectureRoutes.getBookedStudents);

// Export router
module.exports = router;