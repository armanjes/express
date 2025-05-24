import Joi from "joi";

export const validateProduct = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().trim(),
    price: Joi.number().greater(0).precision(2),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
