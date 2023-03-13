
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const { Schema } = mongoose;

// Define Form schema
export const FormSchema = new Schema({
  accountholdername: {
    type: String,
    
  },
  mobilenumber:{
    type:String
  },
  acctype:{
    type: String,
    enum: ['Savings', 'Current']
  },
  bankname:{
    type:String
  },
  branchname:{
    type:String
  },
  bankaccnumber: {
    type: String
  },
  ifsc: {
    type: String
  },
  pannumber: {
    type: String
  }
});
export const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide a unique username"],
    unique: [true, "Username already exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: [true, "Email already exists"],
  },
  firstName: {
    type: String,
    required: [true, "Please provide your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide your last name"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide a valid phone number"],
  },
  form: {
    type: FormSchema,
    required: false,
  }
});

// comparePassword method for user schema
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", UserSchema);
export const Form = mongoose.model("Form", FormSchema);
export default User;

