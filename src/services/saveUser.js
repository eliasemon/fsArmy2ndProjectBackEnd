const {User} = require("../db/models")

const  saveUser = async(user) => {
  try {
    delete user["completedPeer"]
    delete user["timeInPeerInMinutes"]
    delete user["isInPeer"]
    delete user["createdAt"]
    const newUser = new User(user);
    newUser._id = user.id
    const resData = await newUser.save();
    return resData;
  } catch (err) {
    console.error(`Error saving user: ${err}`);
    throw err;
  }
}

module.exports =  saveUser;