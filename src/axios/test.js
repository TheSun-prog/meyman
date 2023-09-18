import axios from "axios";


const URL = 'https://meyman.geeks.kg/api/housing/housing/'

export const postHousing1 = async () => {
    const data = {
        // "user": 1,
        // "housing_name": "lux",
        // "breakfast_type": ["Национальный", "Континентальный"],
        // "image": images[0],
        // "address": "Bishkek",
        // "check_in_time_start": "01:00",
        // "check_in_time_end": "02:00",
        // "check_out_time_start": "03:00",
        // "check_out_time_end": "04:00"
    }

    // console.log(data)
    //
    // const formData = new FormData()
    //
    // formData.append('image', images)
    //
    // console.log(formData.get('image'))

    const respose = await axios.get(URL)
    console.log(respose)
}
