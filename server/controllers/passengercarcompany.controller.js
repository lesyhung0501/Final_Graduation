const { PassengerCarCompany } = require("../models");
const { Op } = require("sequelize");

const createCompany = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newCompany = await PassengerCarCompany.create({
      name,
      description,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EJyW_8S-EOFSTkPKiS7-N_Zo3nU6qS3LfA&usqp=CAU",
      phoneCompany: "00000777888",
      bedroom: 1,
    });
    res.status(201).send(newCompany);
  } catch (error) {
    res.status(500).send(error);
  }
};


const getAllCompany = async (req, res) => {
  const data = req.query;
  const { name } = data;
  try {
    if (name) {
      const ListCompany = await PassengerCarCompany.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).send(ListCompany);
    } else {
      const ListCompany = await PassengerCarCompany.findAll();
      res.status(200).send(ListCompany);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const detailCompany = await PassengerCarCompany.findOne({
      where: { id: id },
    });
    res.status(200).send(detailCompany);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCompany = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const detailCompany = await PassengerCarCompany.findOne({ where: { id } });
    detailCompany.name = name;
    detailCompany.description = description;
    await detailCompany.save();
    res.status(200).send(detailCompany);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteCompany = async (req, res) => {
  const { id } = req.params;
  try {
    await PassengerCarCompany.destroy({ where: { id } });
    res.status(200).send("delete completed!");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createCompany,
  getAllCompany,
  getDetailCompany,
  updateCompany,
  deleteCompany,
};
