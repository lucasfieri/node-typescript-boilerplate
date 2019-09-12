import { checkSchema, validationResult } from 'express-validator';
import { validate } from '../validate';

export const postUserValidator = (req, res, next) => [
  checkSchema({
  name: {
    in: ['body'],
    isString: true,
    errorMessage: 'Invalid name',
  },
  password: {
    in: ['body'],
    isString: true,
    isLength: {
      errorMessage: 'Password should be at least 8 chars long',
      options: { min: 8 }
    },
    errorMessage: 'Invalid password',
  },
  email: {
    in: ['body'],
    isEmail: true,
    errorMessage: 'Invalid email',
  },
  role_id: {
      in: ['body'],
      isInt: true,
      errorMessage: 'Invalid role_id',
  }
}), validate(req, res, next)];
