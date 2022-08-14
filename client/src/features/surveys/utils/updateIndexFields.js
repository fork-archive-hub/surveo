export const updateIndexFields = (array) => {
  return array.map((item, index) => ({ ...item, index: index }));
};
