export const formatDate = (date: number) => {
  const formatDate = new Date(date).toLocaleDateString();

  return `${formatDate}`;
};
