const express = require("express");
const router = express.Router();
const path = require("path");
const {
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
  perticulatEmployee,
} = require("../../Controller/employeeController");

router
  .route("/")
  .get(getEmployee)
  .post(postEmployee)
  .put(putEmployee)
  .delete(deleteEmployee);

router.route("/:id").get(perticulatEmployee);

module.exports = router;
