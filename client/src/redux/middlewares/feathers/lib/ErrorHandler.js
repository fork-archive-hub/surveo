class ErrorHandler {
  static humanizeNotFoundError() {
    return 'Requested resource not found';
  }

  static humanizeNotAuthenticatedError(error) {
    switch (error.message) {
      case 'Invalid login':
        return 'Invalid username or password';
      default:
        return error.message;
    }
  }

  static humanizeBadRequestError(error) {
    switch (error.message) {
      case 'users validation failed: username: username must be unique!':
        return 'Username is already taken';
      default:
        return error.message;
    }
  }

  static stringifyError(error) {
    const { name, message } = error;

    switch (name) {
      case 'NotFound':
        return this.humanizeNotFoundError(error);
      case 'NotAuthenticated':
        return this.humanizeNotAuthenticatedError(error);
      case 'BadRequest':
        return this.humanizeBadRequestError(error);
      default:
        return message;
    }
  }
}

export default ErrorHandler;
