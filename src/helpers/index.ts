export const formatQuantity = (quantity: string | number): string => {
  return Number(quantity).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const generateId = () => {
  const random = Math.random().toString(36).substring(2, 11);
  const date = Date.now().toString(36);
  return random + date;
};

export const formatDate = (date: number) => {
  const newDate = new Date(date);

  return newDate.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};
