export type NewExpenseT = {
  budget: string;
  setBudget: React.Dispatch<React.SetStateAction<string>>;
  handleBudget: (budget: string) => void;
};
