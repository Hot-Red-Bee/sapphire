import mongoose, {Schema} from "mongoose";

const adminSchema = new Schema({
    firstName: {type: String, required: true},
     lastName: {type: String, required: true},
      email: {type: String, required: true, unique:true},
       password: {type: String, required: true},
       age: { 
            type: Number,
             min: [20, "You must be at least 20 years old"],
             max: [70, "you mut be at most 70 years old"]
       },
     gender:{ String,
     enum: ["male","female"]
     },
     created: { type: Date, default: Date.now },
       updated: { type: Date, default: Date.now },
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;