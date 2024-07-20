export const gettingDate = (number:any) => {
  const date = new Date(number);
  return date.getDate() + "/" + (date.getMonth() + 1);
};
