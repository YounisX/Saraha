import User from "../../../../DB/model/User.model.js";
import Jwt from "jsonwebtoken";
import { comparePassword, hashPassword } from "../../../utils/hashAndCompare.js";
import { asyncHandler } from "../../../utils/errorHandling.js";
import { signupSchema } from "./auth.validation.js";

export const getAuthModel = (req,res,next)=>{
    return res.json({message:"Auth model"});
}

export const signUp =async (req,res,next)=>{
    const {name,password,email,gender,age} = req.body;

    const validationResult = signupSchema.validate(req.body,{abortEarly:false});
    if(validationResult.error){
        
        return res.json({message:"validation error",validationResult});
    }
    const findUser = await User.findOne({email:email});
    if (findUser){
    return res.json({message:"email exist"});
    }
    const hashValue = hashPassword({plainPassword:password,saltRound:process.env.SALT_ROUND});
    const user =await User.create({name,password:hashValue,email,age})
    if (!user){
        return res.json({message:'donnu the name'})
    }

    return res.json({message:'user created',user});

}

export const login = async (req,res,next)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return next(new Error('invalid email'))
        // return res.json({message:'invalid email'})      
    }
    
    const matchPassword= comparePassword({plainPassword:password,dataBaseSavedPassword:user.password});
    if(!matchPassword){
        return next(new Error('invalid password'))

        // return res.json({message:'invalid  password'})
    }   
    const token = Jwt.sign({id:user._id,isLoggedIn:true,role:user.role},process.env.SIGNATURE,{expiresIn:60*60*24});
    user.status = "online";
    await user.save();
    return res.json({message:'logged in',token});

}
