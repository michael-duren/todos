export const isItemDue = (date: Date): boolean => {
  return date.getTime() < new Date().getTime();
};
