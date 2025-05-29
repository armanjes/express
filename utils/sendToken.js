import jwt from 'jsonwebtoken'

export const sendToken = (user, res) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.cookie('token', token)
}