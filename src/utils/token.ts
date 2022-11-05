const key = "pc-key";

const setToken = (token: string) => localStorage.setItem(key, token);

const getToken = () => localStorage.getItem(key);

const removeToken = () => localStorage.removeItem(key);

export {
    setToken,
    getToken,
    removeToken
}