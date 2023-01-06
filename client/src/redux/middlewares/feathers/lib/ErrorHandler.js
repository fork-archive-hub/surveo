class ErrorHandler {
  static humanizeNotFoundError() {
    return 'Requested resource not found';
  }

  static humanizeNotAuthenticatedError(error) {
    switch (error.message) {
      case 'Invalid login':
        return 'Invalid username or password';
      default:
        return this.humanizeDynamicErrorMessages(error.message);
    }
  }

  static humanizeBadRequestError(error) {
    switch (error.message) {
      case 'users validation failed: username: username must be unique':
        return 'Username is already taken';
      default:
        return this.humanizeDynamicErrorMessages(error.message);
    }
  }

  static humanizeDynamicErrorMessages(message) {
    if (message.includes('Cast to ObjectId failed for value')) {
      return 'Provided identifier is invalid';
    }

    return message;
  }

  static stringifyError(error) {
    const { code, message } = error;

    switch (code) {
      case 404:
        return this.humanizeNotFoundError(error);
      case 401:
        return this.humanizeNotAuthenticatedError(error);
      case 400:
        return this.humanizeBadRequestError(error);
      default:
        return message;
    }
  }
}

export default ErrorHandler;
