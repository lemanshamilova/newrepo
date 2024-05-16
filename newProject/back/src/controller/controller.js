const Users = require("../module/module");

const getAllData = async (req, res) => {
  let AllData = await Users.find({});
  res.send(AllData);
};

const delData = async (req, res) => {
  let id = req.params.id;
  let findData = await Users.findByIdAndDelete({ _id: id });
  res.send(findData);
};

const postData = async (req, res) => {
   const newUser=await new Users(req.body)
   newUser.save()
   req.send(newUser)
  };

module.exports = { getAllData, delData,postData };
