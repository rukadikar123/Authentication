import { generateJWTToken } from "../config/JWTgenerate.js";
import User from "../Model/User.Schema.js";
import bcrypt from 'bcryptjs'

export const signUp=async(req,res)=>{
    try {
        const {username, email,password}=req.body;

        if(!username || !email || !password){
            return res.status(400).json({
                success:false,
                message:"all fields required"
            })
        }

        const existUser=await User.findOne({email})

        if(existUser){
            return res.status(400).json({
                success:false,
                message:"user already exist please login"
            })
        }

        const hashedPassword=await bcrypt.hash(password,8)

        const user=await User.create({
            username,
            email,
            password:hashedPassword
        })

        const token=generateJWTToken(user._id)

        

        res.cookie("jwt",token,{
            httpOnly:true,
            secure:true,
            sameSite:"None",
            maxAge:4*24*60*60*1000
        })        

        user.password=undefined


        return res.status(200).json({
            success:true,
            message:"user created successfully.",
            user
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:`signup error: ${error.message}`
        })
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"all fields required"
            })
        }

        const existUser=await User.findOne({email})

        if(!existUser){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }

        const comparePassword=await bcrypt.compare(password,existUser.password);
        if(!comparePassword){
            return res.status(400).json({
                success:false,
                message:"Password is Incorrect"
            })
        }

     const token=generateJWTToken(existUser._id)        

            res.cookie("jwt",token,{
                httpOnly:true,
                secure:true,
                sameSite:"None",
                maxAge:4*24*60*60*1000
            })        

        existUser.password=undefined

        return res.status(200).json({
            success:true,
            message:"user loggedIn successfully ",
            user:existUser
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:`login error: ${error.message}`
        })
    }   
}

export const logout=async(req,res)=>{
    try {
        res.clearCookie("jwt",{
              httpOnly:true,
            secure:true,
            sameSite:"None",
        })

        res.status(200).json({
            success:true,
            message:"User logged out successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`logout error: ${error.message}`
        })
    }
}