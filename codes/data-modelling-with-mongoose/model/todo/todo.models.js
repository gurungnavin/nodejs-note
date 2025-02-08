import monggose from 'mongoose'

const todoSchema = new monggose.Schema({
    content : {
        type: String,
        required : true,
    },
    complete : {
      type : Boolean,
      default: false,  
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    subTodo : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sub_todo",
    }

},{timestamps: true})

export const Todo = monggose.model("Todo", todoSchema)