const { Ticket, Trip, sequelize } = require("../models");
const { Op } = require("sequelize");

const getTotalIncome = async (req, res) => {
  try {    
    const [[results]] =
      await sequelize.query(`select sum(price) as total from tickets
      inner join trips on tickets.trip_id = trips.id where status = "Đã thanh toán";`);
    res.status(200).send(results);   
  } catch (error) {
    res.status(500).send(error);
  }
};

const getQuantityBookedTicket = async (req, res) => {
  try {    
    const [[results]] =
      await sequelize.query(`select count(*) as quantityBookedTicket from tickets;`);
    res.status(200).send(results);   
  } catch (error) {
    res.status(500).send(error);
  }
};

const getQuantityBookedTicketByMaxCompany = async (req, res) => {
  try {    
    const [[results]] =
      await sequelize.query(`select passengercarcompanies.name as companyName,
      count(*) as quantityBookedTicketByMaxCompany from tickets inner join trips on tickets.trip_id = trips.id
      inner join passengercarcompanies on trips.company_id = passengercarcompanies.id
      group by company_id order by quantityBookedTicketByMaxCompany desc limit 1;`);
    res.status(200).send(results);   
  } catch (error) {
    res.status(500).send(error);
  }
};

const getQuantityTicketNotPayment = async (req, res) => {
  try {    
    const [[results]] =
      await sequelize.query(`select count(*) as quantityTicketNotPayment from tickets where status = "Chưa thanh toán";`);
    res.status(200).send(results);   
  } catch (error) {
    res.status(500).send(error);
  }
};

const getQuantityTicketOfAllCompany = async (req, res) => {
  try {    
    const [results] =
      await sequelize.query(`select passengercarcompanies.name as companyName,
      count(*) as listTicketCompany from tickets inner join trips on tickets.trip_id = trips.id
      inner join passengercarcompanies on trips.company_id = passengercarcompanies.id
      where tickets.status = "Đã thanh toán"
      group by company_id;`);
    res.status(200).send(results);   
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getTotalIncome,
  getQuantityBookedTicket,
  getQuantityBookedTicketByMaxCompany,
  getQuantityTicketNotPayment,
  getQuantityTicketOfAllCompany,
};
