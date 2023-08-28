import starFillIcon from '../../assets/images/star-fill.svg'
import starDefaultIcon from '../../assets/images/star-default.svg'
import placeIcon from '../../assets/images/place.svg'
import hotelImg from '../../assets/images/hotel-img.png'
import calendar from '../../assets/images/calendar.svg'
import persons from '../../assets/images/persons.svg'
import bed from '../../assets/images/bed.svg'
import freezer from '../../assets/images/freezer.svg'
import done from '../../assets/images/done.svg'
import dish from '../../assets/images/dish-green.svg'
import arrow from '../../assets/images/arrow2.svg'

import Input from '../../components/ui/Input/Input'
import Button from '../../components/ui/Button/Button'
import { NavLink } from 'react-router-dom'

const Booking = () => {
  return (
    <div className="mx-auto w-[1240px]">
      <div className='flex items-center mb-[50px]'>
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={'/hotelcatalog/hotel'}>Отель</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={'hotelcatalog/hotel/room'}>Номер</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        Бронирование
      </div>
      <div className="flex justify-between ">
        <div>
          <div className="flex gap-[13px] justify-between h-[216px] w-[590px]">
            <img
              className="object-cover rounded-xl flex-1 "
              src={hotelImg}
              alt="hotelImg"
            />
            <div className="w-[288px] flex gap-[20px] flex-col">
              <h3 className="font-medium text-[32px]">Novotel</h3>
              <div className="flex">
                <div className="flex gap-[5px]">
                  <img src={starFillIcon} alt="starFillIcon" />
                  <img src={starFillIcon} alt="starFillIcon" />
                  <img src={starFillIcon} alt="starFillIcon" />
                  <img src={starFillIcon} alt="starFillIcon" />
                  <img src={starDefaultIcon} alt="starFillIcon" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#FFC506] pr-[2px] rounded-full mr-[5px] w-[30px] h-[28px] text-center">
                  <span className="text-white">10</span>
                </div>
                <span>Замечательно</span>
              </div>
              <div className="flex">
                <img src={placeIcon} alt="placeIcon" />
                <span className="text-[22px] text-grey">
                  16 проспект Манаса, Бишкек 2,1 км от центра
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <img className="mr-2 mb-4" src={calendar} alt="calendar" />
            <div className="flex">
              <div className="mr-[20px]">
                <p className="text-[20px]">27 аперля,пт</p>
                <p className="text-[16px]">Заезд с 15:00 до 00:00</p>
              </div>
              <div>
                <p className="text-[20px]">28 аперля,пн</p>
                <p className="text-[16px]">Выезд с 00:00 до 12:00</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-[28px] ">Номер:</h2>
            <p className="text-[20px] my-5">
              Улучшенный номер с кроватью размера queensize
            </p>
            <div className="flex mb-2">
              <img className="mr-2" src={persons} alt="persons" />
              <span className="text-[#666666] text-[18px]">2 гостя 36м2</span>
            </div>
            <div className="flex items-center">
              <img className="mr-2" src={bed} alt="bed" />
              <span className="text-[#666666] text-[18px]">
                2 двуспальные кровати
              </span>
            </div>
            <div className="h-[158px] w-[403px] mt-5 justify-between flex flex-wrap">
              <div className="flex-col flex justify-between">
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
              </div>
              <div className="flex-col flex justify-between">
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
              </div>
            </div>
            <h2 className="text-[28px] mb-[40px] mt-[90px]">
              Контактные данные
            </h2>
            <div className="mb-[35px]">
              <h3 className="text-[24px]">Гость</h3>
              <p>Взрослый на которого оформляется бронь</p>
            </div>
            <form>
              <div className="mb-[30px]">
                <label htmlFor="Имя">Имя</label>
                <Input classes={'!w-[320px]'} text={'Введите свое имя'} />
              </div>
              <div className="mb-[30px]">
                <label htmlFor="Имя">Фамилия</label>
                <Input classes={'!w-[320px]'} text={'Введите свое фамилие'} />
              </div>
              <div className="mb-[30px]">
                <label htmlFor="Имя">Номер телефона</label>
                <Input
                  classes={'!w-[320px]'}
                  text={'Введите ваш номер телефона'}
                />
              </div>
              <div className="mb-[30px]">
                <label htmlFor="Имя">Электронный адрес</label>
                <Input classes={'!w-[320px]'} text={'Введите  ваш эл.адрес'} />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col rounded-xl justify-between px-[25px] py-[40px] w-[475px] h-[475px] shadow-lg">
          <p className="text-[24px]">Детализация цена</p>
          <div className="flex">
            <img className="mr-2" src={done} alt="done" />
            <span className="text-[#59A859]">
              Бесплатная отмена в любое время{' '}
            </span>
          </div>
          <div className="flex">
            <img className="mr-2" src={dish} alt="done" />
            <span className="text-[#59A859]">Завтрак включен</span>
          </div>
          <div className="flex justify-between text-[22px] pb-[28px] border-b">
            <span>1 ночь</span>
            <span>3200 сом</span>
          </div>
          <div className="flex justify-between text-3xl items-center">
            <span className="">Итого</span>
            <span>3200 сом</span>
          </div>
          <Button classes={'py-[20px] w-full'}>Забронировать</Button>
        </div>
      </div>
    </div>
  )
}

export default Booking
