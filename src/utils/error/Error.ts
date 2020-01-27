/**
 * Useful Error class
 * @category Errors
 */
class UsefulError extends Error {
  public name: string;

  public status: number;

  public date: Date;

  constructor(name: string, status = 500, message: string) {
    super(message);
    if (typeof Error.captureStackTrace !== 'undefined') {
      Error.captureStackTrace(this, UsefulError);
    }

    this.name = name;
    this.status = status;
    this.date = new Date();
  }
}

export default UsefulError;
