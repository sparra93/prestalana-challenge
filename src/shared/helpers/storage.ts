export function getFromLocalStorage(key: string) {
  return localStorage.getItem(key);
}
export function setLocalStorage(key: string, value: string) {
  return localStorage.setItem(key, value);
}
export function getFromSessionStorage(key: string) {
  return sessionStorage.getItem(key);
}
export function setSessionStorage(key: string, value: string) {
  return sessionStorage.setItem(key, value);
}
