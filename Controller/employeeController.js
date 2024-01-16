data = {};
data.employee = require("../model/employee.json");

const getEmployee = (req, res) => {
  res.json(data.employee);
};

const postEmployee = (req, res) => {
  res.json({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
};

const putEmployee = (req, res) => {
  res.json({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
};

const deleteEmployee = (req, res) => {
  res.json({
    id: req.body.id,
  });
};
const perticulatEmployee = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
  perticulatEmployee,
};
