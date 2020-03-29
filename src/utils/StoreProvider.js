const TOKEN = 'TOKEN';
const getToken = () => {
    return localStorage.getItem(TOKEN);
}

const saveToken = token => {
    localStorage.setItem(TOKEN,token);
}

const clearToken = () => {
    localStorage.removeItem(TOKEN);
}

export {getToken,saveToken,clearToken};