import { AtomEffect } from 'recoil';

const sessionStorageEffect: <T>(key: string) => AtomEffect<T> = (key) => ({ setSelf, onSet }) => {
  const savedValue = sessionStorage.getItem(key);
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    if (isReset) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    }
  });
};

export default sessionStorageEffect;
