import instance from "./axios";


// Registration
export const postSignupData = async (data) => {
    instance.post('/users/signup/', data)
        .then(responce => {
            console.log(responce.data)
        })
        .catch(error => {
            console.log(error)
        })
}


export const postLoginData = async (data) => {
    instance.post('/users/login/', data)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}
