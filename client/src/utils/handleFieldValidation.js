export const handleFieldValidation = (validator) => {
  return (value) => {
    const { result, message } = validator(value);

    return result || message;
  };
};
