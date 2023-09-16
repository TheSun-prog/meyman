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
    type: 'Отель'
  },
  {
    id: 1,
    icon: hostelIcon,
    type: 'Хостел'
  },
  {
    id: 2,
    icon: apartIcon,
    type: 'Квартира'
  },
  {
    id: 3,
    icon: homeIcon,
    type: 'Дом'
  },
  {
    id: 4,
    icon: sanatoriumIcon,
    type: 'Санаторий'
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
    number: '1'
  },
  {
    id: 0,
    number: '2'
  },
  {
    id: 0,
    number: 'Больше 3x'
  },
]

export const typeBed = [
  {
    id: 0,
    icon: bedIcon,
    type: 'Двуспальная'
  },
  {
    id: 1,
    icon: bedIcon,
    type: 'Односпальная'
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
    type: 'Диван кровать'
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
    text: 'Собственная кухная'
  },
]

export const stars = [5, 4, 3, 2, 1, 'Без звезд']

export const rate = ['9-10', '8-9', '7-8', '5-7']

export const facilityObject = [
  {
    id: 0,
    text: 'Бесплатный интернет '
  },
  {
    id: 1,
    text: 'Парковка'
  },
  {
    id: 2,
    text: 'Бассейн'
  },
  {
    id: 3,
    text: 'Фитнес'
  },
  {
    id: 4,
    text: 'Спа услуги'
  },
  {
    id: 5,
    text: 'Бар/Ресторан'
  },
  {
    id: 6,
    text: 'Трансфер от/до аэропорта'
  },
  {
    id: 7,
    text: 'Можно с питомцами'
  },
]

export const facilityRoom = [
  {
    id: 0,
    text: 'Кондиционер'
  },
  {
    id: 1,
    text: 'Стиральная машина'
  },
  {
    id: 2,
    text: 'Сушильная машина'
  },
  {
    id: 3,
    text: 'Телевизор'
  },
  {
    id: 4,
    text: 'Отопление'
  },
  {
    id: 5,
    text: 'Утюг'
  },
  {
    id: 6,
    text: 'Холодильник'
  },
  {
    id: 7,
    text: 'Микроволновка'
  },
  {
    id: 8,
    text: 'Фен'
  },
]