import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "PLEASE ADD TITLE"],
        trim: true,
        maxlength: [40, "TITLE CANNOT BE MORE THAN 40 CHARACTERS"]
    },
    completed: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema)