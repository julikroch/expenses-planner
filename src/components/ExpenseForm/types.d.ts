import {Expense} from '../../types';

export type ExpenseFormI = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  handleExpense: (expense: Expense) => void;
};
