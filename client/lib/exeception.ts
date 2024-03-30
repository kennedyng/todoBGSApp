export class CustomError extends Error {
  code: number;
  info: any;

  constructor(message: string, code: number, info?: any) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.info = info;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
