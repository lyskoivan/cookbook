const Joi = require("@hapi/joi");

const validationShema = Joi.object({
  title: Joi.string(),
  description: Joi.string()
});

module.exports = {
  createRecipe(req, res, next) {
    const validate = validationShema.validate(req.body);
    if (!validate.error) {
      req.body = validate.value;
      return next();
    }
    console.error(validate.error);
    res.status(400).json({ errors: "Validate error" });
  },

  updateRecipe(req, res, next) {
    if (empty(req.body)) {
      return res.status("400").json({ errors: ["No data"] });
    }

    next();
  }
};
