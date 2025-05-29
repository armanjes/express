import Joi from "joi";

export const validateAuth = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().trim().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) res.status(400).json({ errors });

  next();
};
