const {Trip, Station, PassengerCarCompany, Seat, Ticket, sequelize} = require('../models');


const createTrip = async (req, res) => {
    const {fromStation, toStation, startTime, hour, price, company_id} = req.body;
    try {
        const newTrip = await Trip.create({fromStation, toStation, startTime, price, company_id, hour});
        await Seat.bulkCreate([
            { name: 'A1', trip_id: newTrip.id },
            { name: 'A2', trip_id: newTrip.id },
            { name: 'A3', trip_id: newTrip.id },
            { name: 'A4', trip_id: newTrip.id },
            { name: 'A5', trip_id: newTrip.id },
            { name: 'A6', trip_id: newTrip.id },
            { name: 'A7', trip_id: newTrip.id },
            { name: 'A8', trip_id: newTrip.id },
            { name: 'A9', trip_id: newTrip.id },
            { name: 'A10', trip_id: newTrip.id },
            { name: 'A11', trip_id: newTrip.id },
            { name: 'A12', trip_id: newTrip.id },
            { name: 'A13', trip_id: newTrip.id },
            { name: 'A14', trip_id: newTrip.id },
            { name: 'A15', trip_id: newTrip.id },
            { name: 'A16', trip_id: newTrip.id },
          ])
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(500).send(error);
    } 
}


const getAllTrip = async (req, res) => {
    try {
        const [results] =
        await sequelize.query(`select trips.id, stationForFrom.id as fromStation, stationForFrom.province as fromProvince,
        stationForFrom.name as nameStationFrom,
        stationForTo.id as toStation, stationForTo.province as toProvince, stationForTo.name as nameStationTo,
        trips.startTime, trips.hour, trips.price,
        passengercarcompanies.name as companyName, passengercarcompanies.id as company_id
        from trips 
        inner join stations as stationForFrom on trips.fromStation = stationForFrom.id
        inner join stations as stationForTo on trips.toStation = stationForTo.id
        inner join passengercarcompanies on trips.company_id = passengercarcompanies.id
        order by trips.id desc;`);
        // limit 100
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send(error);
    }
}


const updateTrip = async (req, res) => {
    const {id} = req.params;
    const {fromStation, toStation, startTime, price, company_id, hour} = req.body;
    
    try {
        await Trip.update({ fromStation, toStation, startTime, price, company_id, hour }, {
            where: {
              id
            }
        });
        res.status(200).send(`Update success Trip have id = ${id}`);
    } catch (error) {
        res.status(500).send(error);
    }
}


const deleteTrip = async (req, res) => {
    const {id} = req.params;
    try {     
        await Ticket.destroy({
            where: {
                trip_id: id
            }
        })
        await Seat.destroy({
            where: {
                trip_id: id
            }
        })     
        await Trip.destroy({
            where: {id}
        })
        res.status(200).send(`Delete success ${id}`);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllTripByDataSearch = async (req, res) => {
    const data = req.query;
    const { from, to, dateSearch } = data;
    // const start = `${startTime.slice(6)}-${startTime.slice(
    //   3,
    //   5
    // )}-${startTime.slice(0, 2)}`;
    // console.log(start);
    // console.log(`stationForFrom.name = ${from};`);
  
    try {
      const [results] =
        await sequelize.query(`select  stationForFrom.name as stationFrom, stationForFrom.province as fromProvince,
        stationForTo.name as stationTo, stationForTo.province as toProvince,
        trips.startTime, trips.price, trips.hour, trips.estimatedPeriod, passengercarcompanies.name as companyName, 
        passengercarcompanies.image as imageCompany, trips.id as tripId, passengercarcompanies.fastFood,
        passengercarcompanies.id as passengercarcompanyId, passengercarcompanies.bedroom,
        passengercarcompanies.wifi, passengercarcompanies.toilet, passengercarcompanies.airConditioner
        from trips  
        inner join stations as stationForFrom on trips.fromStation = stationForFrom.id
        inner join stations as stationForTo on trips.toStation = stationForTo.id
        inner join passengercarcompanies on trips.company_id = passengercarcompanies.id
        where stationForFrom.province = "${from}" and stationForTo.province = "${to}" and startTime like "${dateSearch}%";`);
      res.status(200).send(results);
    } catch (error) {
      res.status(500).send(error);
    }
};

const getAllTripByDataSearchOrderPrice = async (req, res) => {
    const data = req.query;
    let { from, to, dateSearch } = data;   
    try {       
        const [results] =
        await sequelize.query(`select  stationForFrom.name as stationFrom, stationForFrom.province as fromProvince,
        stationForTo.name as stationTo, stationForTo.province as toProvince,
        trips.startTime, trips.price, trips.hour, trips.estimatedPeriod, passengercarcompanies.name as companyName, 
        passengercarcompanies.image as imageCompany, trips.id as tripId, passengercarcompanies.fastFood,
        passengercarcompanies.id as passengercarcompanyId, passengercarcompanies.bedroom,
        passengercarcompanies.wifi, passengercarcompanies.toilet, passengercarcompanies.airConditioner
        from trips  
        inner join stations as stationForFrom on trips.fromStation = stationForFrom.id
        inner join stations as stationForTo on trips.toStation = stationForTo.id
        inner join passengercarcompanies on trips.company_id = passengercarcompanies.id
        where stationForFrom.province = "${from}" and stationForTo.province = "${to}" and startTime like "${dateSearch}%"
        order by trips.price;`);
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAllTripByDataSearchOrderPriceDesc = async (req, res) => {
    const data = req.query;
    let { from, to, dateSearch } = data;  
    try {
        const [results] =
        await sequelize.query(`select  stationForFrom.name as stationFrom, stationForFrom.province as fromProvince,
        stationForTo.name as stationTo, stationForTo.province as toProvince,
        trips.startTime, trips.price, trips.hour, trips.estimatedPeriod, passengercarcompanies.name as companyName, 
        passengercarcompanies.image as imageCompany, trips.id as tripId, passengercarcompanies.fastFood,
        passengercarcompanies.id as passengercarcompanyId, passengercarcompanies.bedroom,
        passengercarcompanies.wifi, passengercarcompanies.toilet, passengercarcompanies.airConditioner
        from trips  
        inner join stations as stationForFrom on trips.fromStation = stationForFrom.id
        inner join stations as stationForTo on trips.toStation = stationForTo.id
        inner join passengercarcompanies on trips.company_id = passengercarcompanies.id
        where stationForFrom.province = "${from}" and stationForTo.province = "${to}" and startTime like "${dateSearch}%"
        order by trips.price desc;`);
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send(error);
    }
};


  
const getTripDetailByTripId = async (req, res) => {
    const data = req.query;
    const { tripId } = data;
    console.log(tripId);
    try {
        const [[results]] =
        await sequelize.query(`select stationForFrom.name as stationFrom, stationForTo.name as stationTo, 
        stationForFrom.address as addressFromStation, stationForTo.address as addressToStation,
        stationForFrom.province as provinceFromStation, stationForTo.province as provinceToStation,
        trips.id as tripId, trips.startTime, trips.price, trips.hour, trips.estimatedPeriod,
        passengercarcompanies.phoneCompany, passengercarcompanies.bedroom, passengercarcompanies.fastFood,
        passengercarcompanies.wifi, passengercarcompanies.toilet, passengercarcompanies.airConditioner,
        passengercarcompanies.name as companyName, passengercarcompanies.image as imageCompany,
        passengercarcompanies.description as descriptionCompany, passengercarcompanies.id as passengercarcompanyId
        from trips
        inner join stations as stationForFrom on trips.fromStation = stationForFrom.id
        inner join stations as stationForTo on trips.toStation = stationForTo.id
        inner join passengercarcompanies on trips.company_id = passengercarcompanies.id
        where trips.id =  ${tripId};`);
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send(error);
    }
};


module.exports = {
    createTrip,
    getAllTrip,
    updateTrip,
    deleteTrip,
    getAllTripByDataSearch,
    getTripDetailByTripId,
    getAllTripByDataSearchOrderPrice,
    getAllTripByDataSearchOrderPriceDesc,
}