export const formatCEP = (value: string): string => {
  value = value.replace(/\D/g, "");

  if (value.length > 8) {
    value = value.slice(0, 8);
  }
  if (value.length > 5) {
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  }

  return value;
};
