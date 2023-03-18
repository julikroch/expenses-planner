import {ExpenseT} from '../../types';

export type ExpenseListT = {
  expenses: ExpenseT[];
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateExpense: React.Dispatch<React.SetStateAction<ExpenseT | undefined>>;
};
