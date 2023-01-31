import Joi from "joi-browser";

const cardsSchema = Joi.object({
  bizName: Joi.string().min(2).max(255).required(),
  bizDescription: Joi.string().min(2).max(1024).required(),
  bizAddress: Joi.string().min(2).max(500).required(),
  bizPhone: Joi.string().min(9).max(11).required(),
});

export default cardsSchema;
