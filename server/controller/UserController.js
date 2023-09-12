const Users = require('../models/Users');
const bcrypt = require('bcrypt');


const getUser = async (req, res) => {
    const useremail = req.params.email;
    try {
      const result = await Users.findOne({ where: { email: useremail } });
      if (result != null) {
        return res.json(result);
      }
    } catch (err) {
      return res.send("User not found");
    }
  };

const getSingleUser = async (req, res) => {
    const useremail = req.params.email;
    const password = req.params.password;
    try {
        const result = await Users.findOne({where: {email: useremail}});
        const isMatch = await bcrypt.compare(password,result.password);
        if(isMatch && result != null){
            return res.json(result); //MAG good work with the return here!
        }
    } catch (err) {
        console.log("error is: ", err);
        return res.send("User not found");  
    }
};

const addNewUser = async (req, res) => {
    let newUser = req.body;
    const {password} = newUser;
    const hash = await bcrypt.hash(password,10);
    newUser.password = hash;
    console.log("new user to create", newUser);
    let result = await Users.create(newUser);
    return res.json(result);
};


module.exports = {
    getSingleUser,
    addNewUser,
    getUser,
}