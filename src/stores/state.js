import { atom } from "recoil";

export const authAtom = atom({
  key: 'authAtom',
  default: {
    isLoggedIn: Boolean(localStorage.getItem('auth')),
    token: null
  },
})

export const userAtom = atom({
  key: 'userAtom',
  default: null
})

export const navigationAtom = atom({
  key: 'navigationAtom',
  default: [
    { name: '홈', href: 'https://covenantnomad.github.io/hyparking/', current: true },
    { name: '등록차량목록', href: 'https://covenantnomad.github.io/hyparking/vehicle-list', current: false },
    { name: '신규차량등록', href: 'https://covenantnomad.github.io/hyparking/registration', current: false },
  ],
})