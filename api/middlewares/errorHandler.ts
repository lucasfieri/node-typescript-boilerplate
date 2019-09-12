import { InvalidParametersException } from '../utils/exception';
import express from 'express';

  export = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!err) {
      return res.status(404).send();
    }
    if (err instanceof InvalidParametersException) {
      return res.status(400).json({
        message: err.message,
        fields: err.fields,
      });
    }
    if (err.isEmpty && !err.isEmpty()) {
      return res.status(422).json({ errrs: err.array() });
    }
    return res.status(500).json({
      message: err.message,
    });
  };