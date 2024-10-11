import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

const Todo = mongoose.model('Todo', todoSchema).

export default Todo

