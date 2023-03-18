import type {ExpenseT} from '../../types';

export type ExpenseComponentT = {
  expense: ExpenseT;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateExpense: React.Dispatch<React.SetStateAction<ExpenseT | undefined>>;
};

export type IconDictionaryT = {
  savings: string;
  food: string;
  home: string;
  others: string;
  fun: string;
  health: string;
  subscriptions: string;
};
