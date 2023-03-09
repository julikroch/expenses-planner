export const formatQuantity = (quantity: string | number): string => {
  return Number(quantity).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
