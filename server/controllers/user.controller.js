const { User, sequelize, Ticket } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatarUrl = require("gravatar-url");

const register = async (req, res) => {
  let { name, email, password, numberphone, birthday, gender, address, type } = req.body;
  if(!password) { password = "123456" }
  if(!name) { name = "Khách"}
  
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    console.log(hashPassword);
    const urlAvatarDefault = gravatarUrl(email);
    if(!type) {
      const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        numberphone,
        avatar: urlAvatarDefault,
        birthday, 
        gender, 
        address,
        user_company_id: null,
      });
      res.status(201).send(newUser);
    } else {
      const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        numberphone,
        avatar: urlAvatarDefault,
        birthday, 
        gender, 
        address,
        type,
        user_company_id: null,
      });
      res.status(201).send(newUser);
    }
    
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) {
      const token = jwt.sign(
        {
          email: user.email,
          type: user.type,
        },
        "lesyhung",
        { expiresIn: "1d" }
      );
      // 60 * 60
      res.status(200).send({
        success: "Login Success",
        user,
        token,
      });
    } else {
      res.status(500).send("Password không đúng");
    }
  } else {
    res.status(404).send("Not found account!");
  }
};

const getAllUser = async (req, res) => {
  try {
    const listAllUser = await User.findAll();
    res.status(200).send(listAllUser);
  } catch (error) {
      res.status(500).send(error);
  }
}

const updateUser = async (req, res) => {
  const {id} = req.params;
  const { name, email, numberphone, gender, address, birthday } = req.body;
  // if(!password) { password = "123456" }
  
  try {
    if(!birthday) {
      await User.update({ name, email, numberphone, gender, address }, {
        where: {
          id
        }
      });
    } else {
      await User.update({ name, email, numberphone, gender, address, birthday }, {
        where: {
          id
        }
      });
    }
    
    res.status(200).send(`Update success User have id = ${id}`);
  } catch (error) {
      res.status(500).send(error);
  }
}

const deleteUser = async (req, res) => {
  const {id} = req.params;
  
  try {
    await Ticket.destroy({
      where: {
        user_id: id
      }
    })
    await User.destroy({
      where: {id}
    })
    res.status(200).send(`Delete success ${id}`);
  } catch (error) {
      res.status(500).send(error);
  }
}

const uploadAvatar = async (req, res) => {
  console.log("main");
  const { user } = req;
  const { file } = req;
  console.log("file: ", file);
  try {
    const userFound = await User.findOne({
      where: {
        email: user.email,
      },
    });
    if (userFound) {
      const urlImage = `http://localhost:3000/${file.path}`;
      userFound.avatar = urlImage;
      await userFound.save();
      res.status(201).send(userFound);
    } else {
      res.status(500).send(`khong tim thay user co email nhu tren`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllTrip = async (req, res) => {
  try {
    const [results] =
      await sequelize.query(`select us.id as user_id, us.name as user_name, stationForFrom.name as fromStaion, stationForTo.name as toStation, trips.price, trips.startTime from users as us
        inner join tickets as t on us.id = t.user_id
        inner join trips on t.trip_id = trips.id
        inner join stations as stationForFrom on stationForFrom.id = trips.fromStation
        inner join stations as stationForTo on stationForTo.id = trips.toStation;`);
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetaiUser = async (req, res) => {
  const { id } = req.params;
  try {
    const detailUser = await User.findOne({
      where: { id: id },
    });
    res.status(200).send(detailUser);
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = {
  register,
  login,
  getAllUser,
  uploadAvatar,
  getAllTrip,
  updateUser,
  deleteUser,
  getDetaiUser,
};
