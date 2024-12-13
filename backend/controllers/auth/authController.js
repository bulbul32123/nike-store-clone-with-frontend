const { redis } = require("../../lib/redis");
const { User } = require("../../models/userModel");
const jwt = require('jsonwebtoken');

const generateTokens = (userId) => {
    const accessToken = jwt.sign({ userId }, process.env.SECRET_ACCESS_TOKEN, {
        expiresIn: '1h',
    })
    const refreshToken = jwt.sign({ userId }, process.env.SECRET_REFRESH_TOKEN, {
        expiresIn: '7d',
    })
    return { accessToken, refreshToken }
}
const storeRefreshToken = async (userId, refreshToken) => {
    await redis.set(`refresh_Token:${userId}`, refreshToken, 'EX', 7 * 24 * 60 * 60)
}
const setCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 1000,
    })
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })
}


const signup = async (req, res) => {
    const { fullName, email, password } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ message: "User is Already ", success: false })
        }
        const user = await User.create({ fullName, email, password })

        const { accessToken, refreshToken } = generateTokens(user._id)
        setCookies(res, accessToken, refreshToken)
        await storeRefreshToken(user._id, refreshToken)


        return res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        })

    } catch (error) {
        res.status(500).json({ message: "Server Error in Signup function" })
        console.log('Error Occur in Here: ', error);

    }
}
const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(409).json({ message: "User is Doesn't exists. please signup ", success: false })
        }
        if (user && (await user.comparePassword(password))) {
            const { accessToken, refreshToken } = generateTokens(user._id)
            await storeRefreshToken(user._id, refreshToken)
            setCookies(res, accessToken, refreshToken)
            return res.json({ _id: user._id, name: user.name, email: user.email, role: user.role })
        }
    } catch (error) {
        console.log('Error Occur in Login: ', error);

    }

}
const logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if (refreshToken) {
            const decoded = jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN);
            await redis.del(`refresh_Token:${decoded.userId}`)
        }

        res.clearCookie('accessToken')
        res.clearCookie('refreshToken')
        res.status(200).json({ message: "Successfully Logout", success: true })
    } catch (error) {
        console.log('Error Occur in Logout: ', error);

    }
}


const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) {
            return res.status(401).json({ message: "NO Refresh token Provide" })
        }
        const decoded = jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN);
        const storedToken = await redis.get(`refresh_Token:${decoded.userId}`)
        if (storedToken !== refreshToken) {
            return res.status(401).json({ message: "Refresh token is invalid" })
        }
        const accessToken = jwt.sign({ userId: decoded.userId }, process.env.SECRET_ACCESS_TOKEN, { expiresIn: "15m" })
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000,
        });
        return res.json({ message: "Token Refresh Successfully" })

    } catch (error) {
        return res.status(500).json({ message: "Server Error!", error: error.message })
    }
}

const authenticatedUser = (req, res) => {
    try {
        return res.json(req.user)
    } catch (error) {
        console.log('Error Occur in get authenticatedUser: ', error);

    }

}

module.exports = { signup, refreshToken, authenticatedUser, login, logout }