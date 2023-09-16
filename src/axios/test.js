import axios from "axios";


const URL = 'http://127.0.0.1:8000/housingimage/'

export const postHousing1 = async (images) => {
    const data = {
        // "user": 1,
        // "housing_name": "lux",
        // "breakfast_type": ["Национальный", "Континентальный"],
        "image": images[0],
        // "address": "Bishkek",
        // "check_in_time_start": "01:00",
        // "check_in_time_end": "02:00",
        // "check_out_time_start": "03:00",
        // "check_out_time_end": "04:00"
    }

    console.log(data)

    const formData = new FormData()

    formData.append('image', images)

    console.log(formData.get('image'))

    const respose = await axios.post(URL, formData, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0ODAyNjQxLCJpYXQiOjE2OTQ3OTU0NDEsImp0aSI6ImM4M2I5NjliNTIyZDQ5ZmU5NTg5NGE3MTYzYjVlNzQ1IiwidXNlcl9pZCI6Mn0.T83S83wU8rLaPJqHUhhOOWnOjFVagX6QSpbebUFyYFQ`,
            'Content-Type': 'multipart/form-data'
        }
    })
    console.log(respose)
}
