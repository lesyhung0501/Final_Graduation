const { Ticket, sequelize, User, Trip, Seat } = require("../models");
const nodemailer = require('nodemailer');
const { Op } = require("sequelize");

const bookingTicket = async(req, res) => {
  const { user_id, trip_id, seat_ids, userName, userMail, companyName, phoneCompany, provinceFrom, provinceTo, startTime, hour, price } = req.body;
  console.log(seat_ids);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  });
  try {
    const newTickets = await Promise.all(
      seat_ids.map(async(seat_id, id) => {
        const ticketCode = `VxO_${trip_id}_${seat_id}_${user_id}`;
        const newTicket = await Ticket.create({ 
          user_id, trip_id, seat_id, ticketCode, 
          status: "Chưa thanh toán" 
        });
        const mailOptions = {
          from: '',
          to: ``,
          subject: `Thử mail khóa luận tốt nghiệp ${companyName} thông báo đặt vé`,
          html: `<h2>${companyName} thông báo quý khách có tài khoản ${userName} đã đặt vé thành công:</h2> 
                <p>Chuyến đi từ ${provinceFrom} đến ${provinceTo}</p>
                <p>Thời gian chuyến đi là ${hour} ngày ${startTime} </p>
                <p>Giá vé: ${price}</p><p>Mã vé: VxO_${trip_id}_${seat_id}_${user_id}</p>
                <h3>Mong quý khách liên hệ lại nhà xe qua số điện thoại ${phoneCompany} để được hướng dẫn thanh toán.</h3>
                <h3>Chúng tôi chân thành cảm ơn quý khách!</h3>
                `
        };
        // await transporter.sendMail(mailOptions)
        return newTicket;
      })
    );   
    res.status(201).send(newTickets);


  } catch (error) {
    res.status(500).send(error);
  }
};


const getAllTicket = async (req, res) => {
  try {
    const listAllTicket = await Ticket.findAll({
      include: [
        {
          model: User,
          as : 'userInfor',
        },
        {
          model: Trip,
          as : 'tripInfor',
        },
        {
          model: Seat,
          as : 'seatInfor',
        },
      ],
    });
    res.status(200).send(listAllTicket);
  } 
  catch (error) {
    res.status(500).send(error);
  }
};

const getDetailTicket = async (req, res) => {
  const { id } = req.params;
  try {
    const detailTicket = await Ticket.findOne({
      where: { id: id },
    });
    res.status(200).send(detailTicket);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTicket = async (req, res) => {
  const { id } = req.params;
  // console.log(typeof id);
  try {
    const detailTicket = await Ticket.findOne({ where: { id } });
    console.log(detailTicket);
    detailTicket.status = "Đã thanh toán";
    await detailTicket.save();
    res.status(200).send(detailTicket);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTicket = async (req, res) => {
  const { id } = req.params;
  try {
    await Ticket.destroy({ where: { id } });
    res.status(200).send("delete completed!");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllTicketByTripId = async (req, res) => {
  const data = req.query;
  const { tripId } = data;
  console.log(tripId);
  try {
    const [results] =
      await sequelize.query(`select seats.id as seatId, seats.name as seatName, tickets.id as ticketId from seats left join tickets
      on seats.id = tickets.seat_id where seats.trip_id = ${tripId};`);
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllTicketNotSoldByTripId = async (req, res) => {
  const data = req.query;
  const { tripId } = data;
  console.log(tripId);
  try {
    const [results] =
      await sequelize.query(`select seats.id as seatId, seats.name as seatName, tickets.id as ticketId
      from seats left join tickets on seats.id = tickets.seat_id
      where seats.trip_id = ${tripId} and tickets.seat_id is null;`);
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTicketListByUserId = async (req, res) => {
  const data = req.query;
  const { userId } = data;
  try {
    const [results] =
      await sequelize.query(`select users.name as userName, users.numberphone as userPhone, 
      users.avatar as userAvatar, users.email as userMail, users.id as userId,
      stationForFrom.province as fromStationProvince, stationForFrom.name as fromStationName, 
      stationForFrom.address as fromStationAddress, stationForTo.name as toStationName,
      stationForTo.province as toStationProvince, stationForTo.address as toStationAddress,
      trips.startTime, trips.price, trips.hour,
      seats.name as seatName,
      passengercarcompanies.name as companyName, passengercarcompanies.image as companyImage,
      tickets.status, tickets.ticketCode, tickets.Id as ticketId
      from tickets 
      inner join users on tickets.user_id = users.id
      inner join seats on tickets.seat_id = seats.id
      inner join trips on tickets.trip_id = trips.id
      inner join stations as stationForFrom on trips.fromStation = stationForFrom.id
      inner join stations as stationForTo on trips.toStation = stationForTo.id
      inner join passengercarcompanies on trips.company_id = passengercarcompanies.id
      where user_id = ${userId} order by tickets.createdAt desc;`)
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};


const getAllTicketByAdmin = async (req, res) => {
  try {
    const [results] =
      await sequelize.query(`select users.name as userName,
      users.id as userId,
      trips.startTime, trips.hour as hourTime, trips.price, trips.id as tripId,
      seats.name as seatName, seats.id as seatId,
      passengercarcompanies.name as companyName,
      tickets.id as ticketId, ticketCode, tickets.status, tickets.createdAt as ticketCreatedAt from tickets 
      inner join users on tickets.user_id = users.id
      inner join seats on tickets.seat_id = seats.id
      inner join trips on tickets.trip_id = trips.id
      inner join passengercarcompanies on trips.company_id = passengercarcompanies.id
      limit 100;`);
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  bookingTicket,
  getAllTicket,
  getDetailTicket,
  updateTicket,
  deleteTicket,
  getAllTicketByTripId,
  getAllTicketNotSoldByTripId,
  getTicketListByUserId,
  getAllTicketByAdmin,
};
