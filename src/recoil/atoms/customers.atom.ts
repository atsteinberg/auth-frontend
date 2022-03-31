import { atom } from 'recoil';
import { Customer } from 'types/customer.type';

export const customersState = atom({
  key: 'Customers',
  default: null as Customer[] | null,
});

export default customersState;
