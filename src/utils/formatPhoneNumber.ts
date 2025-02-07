export const formatPhoneNumber = (value: string): string => {
  value = value.replace(/\D/g, "");
  if (value.length <= 2) {
    return `(${value}`;
  }
  if (value.length <= 7) {
    return `(${value.slice(0, 2)}) ${value.slice(2)}`;
  }
  if (value.length <= 11) {
    return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
  }
  return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
};
