import jwt from "jsonwebtoken"
import User from "../Model/User.Schema.js";

export const isloggedIn = async (req, res, next) => {
  try {
    let token = req?.cookies?.jwt;
    console.log(token);
    

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token Not found",
      });
    }

    let decodedToken=jwt.verify(token,process.env.JWT_SECRET)

    if (!decodedToken) {
      return res.status(400).json({
        success: false,
        message: "Unauthorize-Invalid token",
      });
    }

    let user=await User.findById(decodedToken.id)
    if(!user){
        return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    
    req.user=user
    next()

  } catch (error) {
    res.status(500).json({
      success: false,
      message: `isLoggedIn error: ${error.message}`,
    });
  }
};
