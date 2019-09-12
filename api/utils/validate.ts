import { validationResult } from 'express-validator';
import { InvalidParametersException } from '../utils/exception';
import express from 'express';

export const validate = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (e) {
    console.log(e)
    if (e.errors && Array.isArray(e.errors)) {
      return next(new InvalidParametersException(e.errors));
    }
    return next(e);
  }
};