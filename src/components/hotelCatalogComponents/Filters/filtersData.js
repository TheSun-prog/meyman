import hotelIcon from "../../../assets/images/hotel-icon-blue.svg"
import hostelIcon from "../../../assets/images/hostel-icon.svg"
import apartIcon from "../../../assets/images/apart-icon.svg"
import homeIcon from "../../../assets/images/home-icon.svg"
import sanatoriumIcon from "../../../assets/images/sanatorium-icon.svg"
import bedIcon from "../../../assets/images/Bed_blue.svg"

export const typeHousing = [
  {
    id: 0,
    icon: hotelIcon,
    type: 'Отели'
  },
  {
    id: 1,
    icon: hostelIcon,
    type: 'Хостелы'
  },
  {
    id: 2,
    icon: apartIcon,
    type: 'Квартиры'
  },
  {
    id: 3,
    icon: homeIcon,
    type: 'Дома'
  },
  {
    id: 4,
    icon: sanatoriumIcon,
    type: 'Санатории'
  },
]

export const typeAllocation = [
  {
    id: 0,
    checked: false,
    title: 'Жилье целиком',
    subTitle: 'Все помещения в вашем рапсоряжении'
  },
  {
    id: 0,
    checked: false,
    title: 'Комната',
    subTitle: 'У вас есть своя команата и доступ к общим помещениям'
  },
  {
    id: 0,
    checked: false,
    title: 'Общая комната',
    subTitle: 'В спальне и общих зонах могут быть другие люди'
  },
]

export const numberBedRooms = [
  {
    id: 0,
    number: '1 спальня'
  },
  {
    id: 0,
    number: '2 спальни'
  },
  {
    id: 0,
    number: 'Больше 3 спален'
  },
]

export const typeBed = [
  {
    id: 0,
    icon: bedIcon,
    type: 'Односпальные'
  },
  {
    id: 1,
    icon: bedIcon,
    type: 'Двуспальная'
  },
  {
    id: 2,
    icon: bedIcon,
    type: 'Kingsize'
  },
  {
    id: 3,
    icon: bedIcon,
    type: 'Queensize'
  },
  {
    id: 4,
    icon: bedIcon,
    type: 'Диван-кровать'
  },
]

export const food = [
  {
    id: 0,
    text: 'Все включено'
  },
  {
    id: 1,
    text: 'Завтрак включен'
  },
  {
    id: 2,
    text: 'Не включено'
  },
  {
    id: 3,
    text: 'С собственной кухней'
  },
]

export const stars = [5, 4, 3, 2, 1, 0]

export const rate = ['9-10', '8-9', '7-8', '5-7']

export const facilityObject = [
  {
    id: 0,
    text: 'Бесплатный интернет',
    key: 'free_internet',
  },
  {
    id: 1,
    text: 'Парковка',
    key: 'park'
  },
  {
    id: 2,
    text: 'Бассейн',
    key: 'pool'
  },
  {
    id: 3,
    text: 'Фитнес',
    key: 'gym'
  },
  {
    id: 4,
    text: 'Спа услуги',
    key: 'spa_services'
  },
  {
    id: 5,
    text: 'Бар/Ресторан',
    key: 'bar'
  },
  {
    id: 6,
    text: 'Трансфер от/до аэропорта',
    key: 'airport_transfer'
  },
  {
    id: 7,
    text: 'Ресторан',
    key: 'restaurant'
  },
  {
    id: 8,
    text: 'Аренда машины',
    key: 'car_rental'
  },
  {
    id: 9,
    text: 'Десткая площадка',
    key: 'children_playground'
  },
  {
    id: 10,
    text: 'Обслуживание номеров',
    key: 'room_service'
  },
  {
    id: 11,
    text: 'Бар у бассейна',
    key: 'poolside_bar'
  },
  {
    id: 12,
    text: 'Кафе',
    key: 'cafe'
  },
  {
    id: 13,
    text: 'Интернет в номере',
    key: 'in_room_internet'
  },
  {
    id: 14,
    text: 'Интернет в во всем отеле',
    key: 'hotel_wide_internet'
  },
]

export const facilityRoom = [
  {
    id: 0,
    text: 'Двуспальная кровать'
  },
  {
    id: 1,
    text: 'Телевизор'
  },
  {
    id: 2,
    text: 'Стиральная машина'
  },
  {
    id: 3,
    text: 'Ванная комната'
  },
  {
    id: 4,
    text: 'Утюг'
  },
  {
    id: 5,
    text: 'Сейф'
  },
  {
    id: 6,
    text: 'Телефон'
  },
  {
    id: 7,
    text: 'Комоды'
  },
  {
    id: 8,
    text: 'Шкафы'
  },
  {
    id: 9,
    text: 'Мини кухня'
  },
  {
    id: 10,
    text: 'Камин'
  },
  {
    id: 11,
    text: 'Закуски'
  },
]