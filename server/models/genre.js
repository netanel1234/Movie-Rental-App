const Joi = require("joi");
const mongoose = require("mongoose");

const genresSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Genre = mongoose.model("Genre", genresSchema);

function validateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(genre, schema);
}

exports.Genre = Genre;
exports.genresSchema = genresSchema;
exports.validate = validateGenre;
