export const formatCPF = (value: string) => {
  // Remove todos os caracteres não numéricos
  const cleaned = value.replace(/\D/g, "");

  // Aplica a máscara: XXX.XXX.XXX-XX
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);

  if (match) {
    const [, p1, p2, p3, p4] = match;
    let formatted = "";
    if (p1) formatted += p1;
    if (p2) formatted += `.${p2}`;
    if (p3) formatted += `.${p3}`;
    if (p4) formatted += `-${p4}`;
    return formatted;
  }

  return value;
};
