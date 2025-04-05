import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModal from '../Modals/user.modal.js'

const Login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please fill the email and password" })
    }

    const user = await userModal.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User Not Found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid Credintionals" });
    }

    const accessTokenLogin = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "72h",
        }
    )

    return res.status(200).json({
        error: false,
        message: "Login Successfull",
        user: { fullname: user.fullname, email: user.email },
        accessTokenLogin
    })

}

export default Login;