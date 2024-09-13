import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'; // Default import
import jwt from 'jsonwebtoken'; // Default import

const { hash, compare } = bcrypt; // Destructure the `hash` function from bcrypt
const { sign } = jwt; // Destructure the `sign` function

const UserSchema = new Schema({
    avatar: { type: String, default: "" },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    verification: { type: String, required: false },
    admin: { type: Boolean, default: false },
}, 
{ timestamps: true }
);

UserSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await hash(this.password, 10);
    }
    next();
});

UserSchema.methods.generateJWT = async function() {
    return await sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

UserSchema.methods.comparePassword = async function (enteredPassword){
    return await compare(enteredPassword, this.password);
}

const User = model("User", UserSchema);
export default User;