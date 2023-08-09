const express = require('express');
const {register, login, uploadAvatar, getAllTrip, getAllUser, updateUser, deleteUser, getDetaiUser} = require('../controllers/user.controller');
const {authenticate} = require('../middlewares/auth/authenticate');
const {uploadImage} = require('../middlewares/uploads/upload_avatar');
const {authorize} = require('../middlewares/auth/authorize');
const {checkExist} = require('../middlewares/validations/checkExist');
const {User} = require('../models');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/upload-avatar', authenticate, uploadImage('avatar'), uploadAvatar);
// userRouter.get('/getAllTrip', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), getAllTrip);
userRouter.get('/getAllTrip', getAllTrip);
userRouter.get("/:id", getDetaiUser);
userRouter.get('/', getAllUser);
userRouter.put('/:id', 
// authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), checkExist(Trip), 
updateUser);
userRouter.delete('/:id', 
// authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), 
// checkExist(User), 
deleteUser);

module.exports = {
    userRouter,
}
