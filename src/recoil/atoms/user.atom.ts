import User from 'classes/user.class';
import { atom } from 'recoil';

export const userState = atom({
  key: 'User',
  default: null as User | null,
});

export default userState;
