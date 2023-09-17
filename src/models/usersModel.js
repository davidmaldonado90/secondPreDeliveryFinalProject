import mongoose from "mongoose";

const collectionUsers = 'users';

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{
        type: String,
        unique: true
    },
    age: Number,
    password: String,
    loggedBy: String
})

const userModel = mongoose.model(collectionUsers, schema);

export default userModel;