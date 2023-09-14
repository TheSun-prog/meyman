import axios from "axios";


const URL = 'http://127.0.0.1:8000/housing/'


export const postHousing1 = async (images) => {
    const data = {
        "user": 1,
        "housing_name": "lux",
        "breakfast_type": ["Национальный", "Континентальный"],
        "images": images,
        "address": "Bishkek",
        "check_in_time_start": "01:00",
        "check_in_time_end": "02:00",
        "check_out_time_start": "03:00",
        "check_out_time_end": "04:00"
    }
    console.log(data)
    const respose = await axios.post(URL, data, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0Njc3Njk2LCJpYXQiOjE2OTQ2NzA0OTYsImp0aSI6IjAyN2RmZmI2NGM1MTRkNjI4NTU3ZDJjODZjN2U0MWM3IiwidXNlcl9pZCI6Mn0.I1-uFz2hUii4H53ZNkJpOviLVroMKRfbe9G3J_o5jGs`
        }
    })
    console.log(respose)
}
