export const formatDate = (date: string) => {
  return (
    date.substr(8, 2) +
    '/' +
    date.substr(5, 2) +
    '/' +
    date.substr(0, 4) +
    ' at ' +
    date.substr(11, 5)
  );
};
