
import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


//user registration
export const register = async(req, res) =>{

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });
    await newUser.save();
    res.status(200).json({success: true, message: "Successfully created"});
  } catch (error) {
    res.status(500).json({success: false, message: "Failed to create. Try again"});
  }
};

// user login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({email});
    //if user does'nt exist
    if (!user) {
      return res.status(404).json({success: false, message: "User not found"});
    }
    catch (err){
        console.log(err)
        //res.status(403).json({ success: false , message: 'failed to login'})
    }
}