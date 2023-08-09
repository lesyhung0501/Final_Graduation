const { Station, sequelize } = require("../models");
const { Op } = require("sequelize");

const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  try {
    const newStation = await Station.create({ name, address, province });
    res.status(201).send(newStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllStation = async (req, res) => {
  const data = req.query;
  const { province } = data;
  try {
    if (province) {
      const [results] =
        await sequelize.query(`select name, address, province from stations      
        where stations.province like "${province}%"
        group by stations.province;`);
        // or stations.province like "% ${province}%"
      res.status(200).send(results);
    } else {
      const ListStation = await Station.findAll();
      res.status(200).send(ListStation);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailStation = async (req, res) => {
  const { id } = req.params;
  try {
    const detailStation = await Station.findOne({
      where: { id: id },
    });
    res.status(200).send(detailStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  try {
    const detailStation = await Station.findOne({ where: { id } });
    detailStation.name = name;
    detailStation.address = address;
    detailStation.province = province;
    await detailStation.save();
    res.status(200).send(detailStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  try {
    // await sequelize.query("SET FOREIGN_KEY_CHECKS = 0;");
    // await sequelize.query(`delete from trips where fromStation=${id} or toStation=${id};`);
    await Station.destroy({ where: { id } });
    res.status(200).send("delete completed!");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSuggestProvince = async (req, res) => {
  const data = req.query;
  const { userId } = data;
  try {
    const [[results]] =
        await sequelize.query(`select stationForFrom.province as fromStationProvince, 
        stationForTo.province as toStationProvince,
        count(*) as quantitySuggest
        from tickets 
        inner join users on tickets.user_id = users.id
        inner join trips on tickets.trip_id = trips.id
        inner join stations as stationForFrom on trips.fromStation = stationForFrom.id
        inner join stations as stationForTo on trips.toStation = stationForTo.id
        where user_id = ${userId}
        group by fromStationProvince, toStationProvince
        order by quantitySuggest desc limit 1;`);
      res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
  getSuggestProvince,
};
