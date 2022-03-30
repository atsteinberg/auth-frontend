import User from 'classes/user.class';
import { atom } from 'recoil';
import sessionStorageEffect from 'recoil/helpers/sessionStorageEffect.helper';

export const userState = atom({
  key: 'User',
  default: null as User | null,
  effects: [sessionStorageEffect('current_user')],
});

export default userState;
