export const isEmpty = value => {
  return (value && value.length < 0) || !value;
};

export const isNotEmpty = value => {
  return (value && !value.length < 0) || !!value;
};
