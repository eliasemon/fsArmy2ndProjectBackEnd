const {Catagory} = require("../db/models")

const findCatagories = async () => {
    try {
      const data = await Catagory.find();
      return data;
    } catch (err) {
      return false;
    }
  }
  
module.exports =  findCatagories ;