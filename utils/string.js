export const withEllipsis = (str, maxChars) => {
  return (str || '').substring(0, maxChars);
};
