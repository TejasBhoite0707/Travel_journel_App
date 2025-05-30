import mongoose from "mongoose";
let Schema = mongoose.Schema;

let userSchema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
})

const userModal = mongoose.model("User", userSchema);
export default userModal
