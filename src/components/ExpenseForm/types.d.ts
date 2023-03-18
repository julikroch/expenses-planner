import {ExpenseT} from '../../types';

export type ExpenseFormT = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  handleExpense: (expense: Expense) => void;
  setUpdateExpense: React.Dispatch<React.SetStateAction<ExpenseT | undefined>>;
  updateExpense: ExpenseT | undefined;
};
