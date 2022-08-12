export const validateJoiSchema = (schema, value) => {
  const { error } = schema.validate(value);

  return {
    result: error === undefined,
    message: error ? error.message : '',
  };
};
