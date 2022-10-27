export const convertDateToHumanFormat = (isoFormat) => {
  const [date] = new Date(isoFormat).toLocaleString().split(', ');

  return date;
};
