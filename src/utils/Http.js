const BASE_URL = 'https://contacts-telran.herokuapp.com/';

const onLogin = (email,password) => {
    return fetch(`${BASE_URL}api/login`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        body:JSON.stringify({
            email,
            password
        })
    }).then(response => response.json());
}

const onRegistration = (email,password) => {
    return fetch(`${BASE_URL}api/registration`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        body:JSON.stringify({
            email,
            password
        })
    }).then(response => response.json());
}

const getAllContacts = token => {
    return fetch(`${BASE_URL}api/contact`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8',
            Authorization:token
        }
    }).then(response => {
        console.log(response);
        
        return response.json()
    });
}

export {onLogin,onRegistration,getAllContacts};