const mongoose = require("mongoose");
const Joi = require("joi");

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 255 },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
    date: { type: Date, default: Date.now },
  })
);

exports.User = User;
exports.validate = validateUser;

// async function get_user() {
//   const users = await User.find({ email: "stanleyekene.ze@gmail.com" });
//   console.log(users);
// }

// async function update_user(id) {
//   const user = await User.findById(id);
//   if (!user) return;
//   user.set({
//     name: "Stanley3",
//     email: "stanleyeken.eze@gmail.com",
//   });
//   const result = await user.save();
//   console.log(result);
// }

// //create_user();
// get_user();
