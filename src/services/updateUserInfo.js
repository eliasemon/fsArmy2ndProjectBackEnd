const {User} = require("../db/models")

const  updatedUserInfo = async( id ,updatedInfo) => {
  try {
        delete updatedInfo["email"]
        delete updatedInfo["phoneNumber"]
        delete updatedInfo["completedPeer"]
        delete updatedInfo["timeInPeerInMinutes"]
        delete updatedInfo["isInPeer"]

 
    const resData = await User.findByIdAndUpdate(id , updatedInfo , {new : true})
    return resData;
  } catch (err) {
    console.error(`Error saving user: ${err}`);
    throw err;
  }
}

module.exports =  updatedUserInfo;