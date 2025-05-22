export const formatDateRange = (start: string, end: string) => {
  const format = (date: string) => date.slice(2).replaceAll('-', '.');
  return `${format(start)} - ${format(end)}`;
};
