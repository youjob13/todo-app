export const createDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDate();
  return `${year}-${month < 12 ? +month + 1 : `0${(month = 1)}`}-${day}`;
};
