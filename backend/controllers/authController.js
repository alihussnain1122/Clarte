const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @route   POST /api/users/register

exports.registerUser= async(req, res)=>{
    const{name, email, password, confirmPassword}= req.body;
    try{
        const existUser= await User.findOne({email: email });
        if (existUser){
            return res.status(400).json({message: "User already exists"});
        }
        if (!password || !confirmPassword || password !== confirmPassword){
            return res.status(400).json({message: "Passwords do not match"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const [firstName, lastName] = name.split(' ');
        const user= await User.create({firstName,lastName, email, password: hashedPassword});
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        // res.status(201).json({
        //     _id: user._id,
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     email: user.email,
        //     password: user.password,
        //     confirmPassword: user.confirmPassword,
        //     token: token,
        // });
        
    }
    catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Server error" });
        }
};


// @route   POST /api/users/login
exports.loginUser = async(req, res)=>{
    const {email, password}= req.body;
    try{
        const user= await User.findOne({email: email});
        if(!user){
            return res.status(400).json({message: "User does not exist"});
        }

        const isPasswordValid= await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({message: "Invalid credentials"});
        }

        // res.json({
        //     _id: user._id,
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     email: user.email,
        //     token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        //         expiresIn: "1d",
        //     }),
        // })
    }
    catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Server error" });
    }
}