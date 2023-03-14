const {User} = require("../db/models")

const findUserById = async (id) => {
    try {
      const user = await User.findById(id);
      return user;
    } catch (err) {
      return false;
    }
  }
  
module.exports =  findUserById ;