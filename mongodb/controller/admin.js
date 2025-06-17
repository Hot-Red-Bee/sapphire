import Admin from "../models/admin.js";

export const createAdmin= async (req, res) => {
    try {
        const {firstName, lastName, email, age} = req.body;
        if (!firstName || !lastName || !email || !age) {
            return res.status(400).json({message: "All fields are required."});
        }
        const checkEmail= await createAdmin.findOne({email});
        if (checkEmail) {
            return res.status(400).json({message: "Email already exist."});
        }

          await Admin.create ({
            firstName,
            lastName,
            email,
            age,
          });

          res.status(201)
          .json({message: "Account created successfully!!", Admin});
        
    } catch (error) {
        return res.status(500).json({message: "Error in creating Admin.", error});
    }
};


export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const admin = await Admin.findOne({ email });
    if (admin.password !== password ||  !admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json({ message: "Login successful", admin });
  } catch (error) {
    console.error(error, "ERROR LOGGING IN Admin");
    res.status(500).json({ message: "Error logging in Admin" });
  }
};


export const getAllAdmin = async (req, res) => {
  try {
    const admin = await Admin.find();
    res.status(200).json({ count: admin.length, admin });
  } catch (error) {
    console.error(error, "ERROR FETCHING Admin");
    res.status(500).json({ message: "Error fetching Admin" });
  }
};

export const updateAdmin = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const updateAdmin= await Admin.findByIdAndUpdate(id, updateData, {
        new: true,  
        runValidators: true,
      });

      if (!updateAdmin) {
        return res.status(404).json({ message: "Admin not found" });
      }

      res.status(200)
      .json({message: "Admin updated successfully", updateAdmin});
    } catch (error) {
        console.error(error, "ERROR UPDATING Admin");
        res.status(500).json({ message: "Error updating Admin" });
      
    }
};


export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params; 

    const deletedAdmin = await Admin.findByIdAndDelete(id);

    if (!deletedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully", admin: deletedAdmin });
  } catch (error) {
    console.error(error, "ERROR DELETING Admin");
    res.status(500).json({ message: "Error deleting Admin" });
  }
};