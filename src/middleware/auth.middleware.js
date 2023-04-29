import User from "../../DB/model/User.model.js";
import Jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/errorHandling.js";

 const auth  = asyncHandler( async (req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.json({message:"authorization required"});
    }
    
    if(!authorization?.startsWith('saraha')){
        return res.json({message:"invalid bearer token"});
    }
    const token = authorization.split('saraha ')[1];
    if(!token){
        // return res.json({message:"invalid token"});
        return next(new Error('in-valid token'));
        
    }
    const decoded = Jwt.verify(token,process.env.SIGNATURE); 
    const authUser = await User.findById(decoded.id)
    if(!authUser) {
        return next(new Error("user doesn't exist shit",{statusCode:404}))
    }
    console.log({authUser});
    
    req.user = authUser;
return next();
});

export default auth;