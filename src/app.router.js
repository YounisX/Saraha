import authRouter from '../src/modules/Auth/auth.router.js'
import userRouter from '../src/modules/User/user.router.js'
import messageRouter from '../src/modules/Message/message.router.js'
import connectDB from '../DB/connection.js'


 const initApp = (app,express)=>{

    app.use(express.json({}))
    app.use('/auth',authRouter);
    app.use('/user',userRouter);
    app.use('/message',messageRouter);

    app.all('*',(req,res,next)=>{
       return res.json({message:"this page doesn't exist"})
    })
    //error handling middleware  
    app.use((error,req,res,next)=>{
      if(error){
         return res.json({message:error.message})
      }
    })
 
    connectDB();
 }

 export default initApp;