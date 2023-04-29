import User from "../../../../DB/model/User.model.js";
import Jwt  from "jsonwebtoken";

export const getUserModel = (req,res,next)=>{
    return res.json({message:"User model"});
}


export const findUser =async (req,res,next)=>{
    // const{email} = req.body;
    const userExistCheck = await User.findOne(req.user._id)
    if(!userExistCheck){
    return res.json({message:"user doesnt exist"});

    }
    return res.status(402).json(userExistCheck);

}