const express = require("express");
const {
  createCompany,
  getAllCompany,
  getDetailCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/passengercarcompany.controller");
const { checkExist } = require("../middlewares/validations/checkExist");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const {uploadImage} = require('../middlewares/uploads/upload_avatar');
const { PassengerCarCompany } = require("../models");

const companyRouter = express.Router();

companyRouter.post(
  "/",
  // authenticate,
  // authorize(["ADMIN", "SUPER_ADMIN"]),
  // uploadImage('avatarCompany'),
  createCompany
);
companyRouter.get("/", getAllCompany);
companyRouter.get("/:id", getDetailCompany);
companyRouter.put(
  "/:id",
  // authenticate,
  // authorize(["ADMIN", "SUPER_ADMIN"]),
  // checkExist(PassengerCarCompany),
  // uploadImage('avatarCompany'),
  updateCompany
);
companyRouter.delete(
  "/:id",
  // authenticate,
  // authorize(["ADMIN", "SUPER_ADMIN"]),
  // checkExist(PassengerCarCompany),
  deleteCompany
);

module.exports = {
  companyRouter,
};
