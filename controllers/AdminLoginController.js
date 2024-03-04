const bcrypt = require('bcrypt');
const AdminLogin = require('../models/AdminLogin'); // Adjust the path as needed
const saltRounds = 10;

const CreateadminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const adminLogin = new AdminLogin({
            email,
            password: hashedPassword,
        });

        await adminLogin.save();

        return res.status(201).json({
            status: 200,
            message: "Admin Login Created Successfully",
            data: { adminLogin },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: 500, message: "Server side error " });
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const adminLogin = await AdminLogin.findOne({ email });

        if (adminLogin) {
            // Compare the provided password with the hashed password
            const isPasswordValid = await bcrypt.compare(password, adminLogin.password);

            if (isPasswordValid) {
                return res.status(200).json({
                    status: 200,
                    message: "Admin Login Successfully",
                    data: { adminLogin },
                });
            } else {
                return res.status(400).json({
                    status: 400,
                    message: "Admin Login Failed"
                });
            }
        } else {
            return res.status(400).json({
                status: 400,
                message: "Admin Login Failed"
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: 500, message: "Server side error " });
    }
};

module.exports = {
    CreateadminLogin,
    Login,
};
