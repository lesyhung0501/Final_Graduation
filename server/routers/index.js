const express = require("express");
const { stationRouter } = require("./station.routers");
const { userRouter } = require("./user.router");
const { tripRouter } = require("./trip.router");
const { companyRouter } = require("./passengercarcompany.router");
const { seatRouter } = require("./seat.router");
const { ticketRouter } = require("./ticket.router");
const { statisticRouter } = require("./statistic.router");

const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouter);
rootRouter.use("/passengerCarCompanies", companyRouter);
rootRouter.use("/seats", seatRouter);
rootRouter.use("/tickets", ticketRouter);
rootRouter.use("/statistics", statisticRouter);

module.exports = {
  rootRouter,
};
