import { check, validationResult } from "express-validator";

const email = check("email", "invalid email address")
  .exists()
  .withMessage("email required")
  .trim()
  .isEmail()
  .normalizeEmail();

const justAnotherString = (fieldName) =>
  check(fieldName, `${fieldName} is required`)
    .exists()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3 });

const signinValidator = [email, justAnotherString("password")];

const validateForm = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: 422,
      errors,
    });
  }
  return next();
};

export { signinValidator, validateForm };
