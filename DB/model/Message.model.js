import mongoose ,{model} from 'mongoose';

const messageSchema = new mongoose.Schema({
message:{
    type:String,
    required:true,
},
receiverId:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:true
}

},{
    timestamps:true
});

const Message = mongoose.models.Message||model('Message', messageSchema);

export default Message;