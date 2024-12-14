const express = require('express');
const { signup, login, logout, authenticatedUser, generateNewAccessTokenUsingRefreshToken } = require('../controllers/auth/authController');
const { protectedRoute } = require('../middlewares/authMiddlewares');

const router = express.Router()


router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.post('/generate-new-accessToken', generateNewAccessTokenUsingRefreshToken)
router.post('/userAuthenticated', protectedRoute, authenticatedUser)

module.exports = router