/**
 * Guarda una cookie.
 * @param cokie_name Nombre con cual guardar la cookie
 * @param cookie_value Valor de la coockie
 * @param exp_days Cantidad de días hasta la expiración
 */
const setCookie = (cokie_name: string, cookie_value: string, exp_days: number): void => {
    // cookie name, value, expiration in days
    const date = new Date();
    date.setTime(date.getTime() + (exp_days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cokie_name + "=" + cookie_value + ";" + expires + ";path=/";
}

/**
 * Busca y retorna el valor de una cookie o null si no se encuentra.
 * @param cokie_name Nombre de la coockie
 * @returns 
 */
const getCookie = (cokie_name: string): string | null => {
    // cookie name
    const name = cokie_name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

/**
 * Elimina una cookie.
 * @param cokie_name Nombre de la coockie
 */
const deleteCookie = (cokie_name: string): void => {
    document.cookie = `${cokie_name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export {
    setCookie,
    getCookie,
    deleteCookie
}