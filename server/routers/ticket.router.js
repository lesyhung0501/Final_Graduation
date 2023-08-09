const express = require("express");
const {
  bookingTicket,
  getAllTicket,
  getDetailTicket,
  updateTicket,
  deleteTicket,
  getAllTicketByTripId,
  getAllTicketNotSoldByTripId,
  getTicketListByUserId,
  getAllTicketByAdmin
} = require("../controllers/ticket.controller");
const { checkExist } = require("../middlewares/validations/checkExist");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const { Ticket } = require("../models");

const ticketRouter = express.Router();

ticketRouter.post(
  "/",
  // authenticate,
  bookingTicket
);
ticketRouter.get('/getAllTicketByTripId', getAllTicketByTripId);
ticketRouter.get('/getAllTicketNotSoldByTripId', getAllTicketNotSoldByTripId);
ticketRouter.get('/getAllTicketByAdmin', getAllTicketByAdmin);
ticketRouter.get('/getTicketListByUserId', getTicketListByUserId);
ticketRouter.get("/", getAllTicket);
ticketRouter.get("/:id", getDetailTicket);
ticketRouter.put(
  "/:id",
  authenticate,
  authorize(["ADMIN", "SUPER_ADMIN"]),
  checkExist(Ticket),
  updateTicket
);
ticketRouter.delete(
  "/:id",
  // authenticate,
  // authorize(["ADMIN", "SUPER_ADMIN"]),
  checkExist(Ticket),
  deleteTicket
);

module.exports = {
  ticketRouter,
};
