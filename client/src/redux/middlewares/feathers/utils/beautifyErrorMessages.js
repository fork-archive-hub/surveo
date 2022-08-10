export const beautifyErrorMessages = (message) => {
  switch (message) {
    case 'Invalid login':
      return 'Invalid username or password';
    case 'users validation failed: username: username must be unique!':
      return 'Username is already taken';
    default:
      return message;
  }
};
