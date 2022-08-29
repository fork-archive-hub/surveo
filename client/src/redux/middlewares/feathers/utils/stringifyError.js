export const errors = {
  NotFound: () => 'Requested resource not found',
  NotAuthenticated: (message) => {
    switch (message) {
      case 'Invalid login':
        return 'Invalid username or password';
      default:
        return message;
    }
  },
  BadRequest: (message) => {
    switch (message) {
      case 'users validation failed: username: username must be unique!':
        return 'Username is already taken';
      default:
        return message;
    }
  },
};

export const stringifyError = (error) => {
  const { name, message } = error;

  try {
    return errors[name](message);
  } catch (_) {
    return message;
  }
};
