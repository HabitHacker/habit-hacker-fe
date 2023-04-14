import { atom } from "recoil";

export const accountState = atom<string>({
  key: `account-${Math.random()}`,
  default: undefined,
});