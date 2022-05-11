const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.deleteOne(req.body);
    res.status(200).send({ user: deleteUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
    try {
      const updateUser = await User.updateOne(
        { username: req.body.username },
        { $set: { email: req.body.email } }
      );
      res.status(200).send({ user: updateUser });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message });
    }
  };

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ users });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
