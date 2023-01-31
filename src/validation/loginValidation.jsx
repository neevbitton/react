import Joi from "joi-browser";

const loginSchema = {
  email: Joi.string().email().max(64).required(),
  password: Joi.string().min(6).max(1024).required(),
};

export default loginSchema;