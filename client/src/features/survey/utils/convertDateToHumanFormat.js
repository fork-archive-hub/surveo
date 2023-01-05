export const convertDateToHumanFormat = (isoFormat) => {
  const date = new Date(isoFormat);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
