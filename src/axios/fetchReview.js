import instance from "./axios";


export const getReviews = async () => {
    instance.get('/users/review/')
        .then(responce => {
            console.log(responce.data)
        })
        .catch(error => {
            console.log(error)
        })
}