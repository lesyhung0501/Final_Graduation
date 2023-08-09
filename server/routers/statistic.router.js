const express = require("express");
const {
  getTotalIncome,
  getQuantityBookedTicket,
  getQuantityBookedTicketByMaxCompany,
  getQuantityTicketNotPayment,
  getQuantityTicketOfAllCompany
} = require("../controllers/statistic.controller");

const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

const statisticRouter = express.Router();


statisticRouter.get('/getTotalIncome', getTotalIncome);
statisticRouter.get('/getQuantityBookedTicket', getQuantityBookedTicket);
statisticRouter.get('/getQuantityBookedTicketByMaxCompany', getQuantityBookedTicketByMaxCompany);
statisticRouter.get('/getQuantityTicketNotPayment', getQuantityTicketNotPayment);
statisticRouter.get('/getQuantityTicketOfAllCompany', getQuantityTicketOfAllCompany);


module.exports = {
  statisticRouter,
};
