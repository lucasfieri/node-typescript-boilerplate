export class InvalidParametersException extends Error {
    fields: any[];
    constructor(fields = []) {
      super('Invalid parameters passed.');
      this.fields = fields;
    }
  }