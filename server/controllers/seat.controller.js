const { Seat } = require("../models");
const { Op } = require("sequelize");

const createSeat = async (req, res) => {
  const { name, status, vehicle_id } = req.body;
  try {
    const newSeat = await Seat.create({ name, status, vehicle_id });
    res.status(201).send(newSeat);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllSeat = async (req, res) => {
  const data = req.query;
  const { name } = data;
  try {
    if (name) {
      const ListSeat = await Seat.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).send(ListSeat);
    } else {
      const ListSeat = await Seat.findAll();
      res.status(200).send(ListSeat);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailSeat = async (req, res) => {
  const { id } = req.params;
  try {
    const detailSeat = await Seat.findOne({
      where: { id: id },
    });
    res.status(200).send(detailSeat);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateSeat = async (req, res) => {
  const { id } = req.params;
  const { name, status, vehicle_id } = req.body;
  try {
    const detailSeat = await Seat.findOne({ where: { id } });
    detailSeat.name = name;
    detailSeat.status = status;
    detailSeat.vehicle_id = vehicle_id;
    await detailSeat.save();
    res.status(200).send(detailSeat);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteSeat = async (req, res) => {
  const { id } = req.params;
  try {
    await Seat.destroy({ where: { id } });
    res.status(200).send("delete completed!");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createSeat,
  getAllSeat,
  getDetailSeat,
  updateSeat,
  deleteSeat,
};
