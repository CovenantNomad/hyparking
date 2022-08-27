import { divisions } from "../data/division";

export const debounce = (callback, duration) => {
  let timer;
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => callback(...args), duration)
  }
}

export const getColor = (division) => {
  return divisions.filter((item) => item.name === division)[0].color
}