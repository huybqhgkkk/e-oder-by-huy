export const getAuth = () => {
    return localStorage.getItem('auth');
};

export const setAuth = (auth) => {
    const myObject = { isAuthenticated: auth?.isAuthenticated, role: auth?.role };
    localStorage.setItem('auth', JSON.stringify(myObject));
};

export const removeAuth = () => {
    localStorage.removeItem('auth');
};
export const getToken = () => {
    return localStorage.getItem('accessToken');
};

export const setToken = (token) => {
    localStorage.setItem('accessToken', token);
};

export const removeToken = () => {
    localStorage.removeItem('accessToken');
};

export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
};

export const setRefreshToken = (refreshToken) => {
    localStorage.setItem('refreshToken', refreshToken);
};

export const removeRefreshToken = () => {
    localStorage.removeItem('refreshToken');
};
