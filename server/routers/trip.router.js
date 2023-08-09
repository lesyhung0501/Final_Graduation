const express = require('express');
const {createTrip, getAllTrip, updateTrip, deleteTrip, getAllTripByDataSearch, 
getTripDetailByTripId, getAllTripByDataSearchOrderPrice, getAllTripByDataSearchOrderPriceDesc
} = require('../controllers/trip.controller');
const {checkExist} = require('../middlewares/validations/checkExist');
const {authenticate} = require('../middlewares/auth/authenticate');
const {authorize} = require('../middlewares/auth/authorize');
const {Trip} = require('../models');
const tripRouter = express.Router();

tripRouter.post('/', 
// authorize(['ADMIN', 'SUPER_ADMIN']), authenticate, 
createTrip);
tripRouter.get('/getAllTripByDataSearch', getAllTripByDataSearch);
tripRouter.get('/getAllTripOrderPriceByDataSearch', getAllTripByDataSearchOrderPrice);
tripRouter.get('/getAllTripOrderPriceDescByDataSearch', getAllTripByDataSearchOrderPriceDesc);
tripRouter.get('/getTripDetailByTripId', getTripDetailByTripId);

tripRouter.get('/', getAllTrip);
tripRouter.put('/:id', 
// authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), checkExist(Trip), 
updateTrip);
tripRouter.delete('/:id', 
// authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), 
checkExist(Trip), 
deleteTrip);


module.exports = {
    tripRouter,
}