import mongoose ,{model} from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'male'
  },
  status: {
    type: String,
    enum: ['offline', 'online'],
    default: 'offline'
  },
  profilePicture:String,
  phone:String,
  address:String,
  profilePicture:String,
  age:Number,
  confirmEmail:{
    type:Boolean,
    default:false
  },
  role: {
    type: String,
    enum: ['User', 'Admin'],
    default: 'User'
  },
  password: {
    type: String,
    required: true
  }
},{
    timestamps:true
});

const User = mongoose.models.User||model('User', userSchema);

export default User;