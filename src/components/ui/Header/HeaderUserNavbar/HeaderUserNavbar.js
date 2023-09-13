import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Button from '../../Button/Button'
import LanguageMenu from '../DropdownMenues/LanguageMenu/LanguageMenu'
import MoneyMenu from '../DropdownMenues/MoneyMenu/MoneyMenu'

import language from '../../../../assets/images/language.svg'
import som from '../../../../assets/images/som.svg'
import eur from '../../../../assets/images/euro.svg'
import usd from '../../../../assets/images/usd.svg'

const HeaderUserNavbar = ({ pageType, showModal, handleShowModal }) => {
  const [isActive, setIsActive] = useState(1)
  const handleActiveLink = index => {
    setIsActive(index)
  }
  
  const [localStorageCurrency, setlocalStorageCurrency] = useState('')

  const currency = useSelector(state => state.currency)

  // Сохраняем в localStorage при изменении localStorageCurrency
  useEffect(() => {
    const localData = localStorage.getItem('currency')
    if (localData) {
      setlocalStorageCurrency(localData)
    }
  }, [])

  const currencies = {
    'KGS': som,
    'EUR': eur,
    'USD': usd
  }

  const navigationLinks = {
    mainpage: (
      <div className="flex gap-[57px] items-center justify-self-end">
        <div className="flex gap-[21px] items-center">
          <div className="relative">
            <div
              className="flex gap-[12px] items-center cursor-pointer relative"
              onClick={() =>
                handleShowModal(showModal !== 'language' ? 'language' : '')
              }
            >
              <img src={language} alt="language" />
              <p className="text-[16px]">Русский</p>
            </div>
            {showModal === 'language' && (
              <LanguageMenu handleMenu={handleShowModal} />
            )}
          </div>

          <div className="relative w-[70px]">
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                handleShowModal(showModal !== 'money' ? 'money' : '')
              }
            >
              <img className='mr-[5px] object-cover' src={currency ? currencies[currency] : currencies[localStorageCurrency]} alt="currency" />
              <p className="text-[16px]">{currency || localStorageCurrency}</p>
            </div>
            {showModal === 'money' && (
              <MoneyMenu closeMenu={handleShowModal} handleMenu={handleShowModal} />
            )}
          </div>
        </div>
        <NavLink to="/businessMainPage">
          <Button width={237} height={44} text="Сдать жилье на Meyman" />
        </NavLink>
      </div>
    ),
    hotel: (
      <ul className="flex gap-[39px]">
        <li>
          <p
            className={`text-[18px] p-[10px] cursor-pointer ${
              isActive === 1
                ? 'text-black border-b-[2px] border-b-black'
                : 'text-grey'
            }`}
            onClick={() => handleActiveLink(1)}
          >
            Объект размещения
          </p>
        </li>
        <li>
          <p
            className={`text-[18px] p-[10px] cursor-pointer ${
              isActive === 2
                ? 'text-black border-b-[2px] border-b-black'
                : 'text-grey'
            }`}
            onClick={() => handleActiveLink(2)}
          >
            Номера
          </p>
        </li>
        <li>
          <p
            className={`text-[18px] p-[10px] cursor-pointer ${
              isActive === 3
                ? 'text-black border-b-[2px] border-b-black'
                : 'text-grey'
            }`}
            onClick={() => handleActiveLink(3)}
          >
            Календарь
          </p>
        </li>
        <li>
          <p
            className={`text-[18px] p-[10px] cursor-pointer ${
              isActive === 4
                ? 'text-black border-b-[2px] border-b-black'
                : 'text-grey'
            }`}
            onClick={() => handleActiveLink(4)}
          >
            Бронирования
          </p>
        </li>
      </ul>
    ),
    car: (
      <ul className="flex gap-[39px]">
        <li>
          <p
            className={`text-[18px] p-[10px] cursor-pointer ${
              isActive === 1
                ? 'text-black border-b-[2px] border-b-black'
                : 'text-grey'
            }`}
            onClick={() => handleActiveLink(1)}
          >
            Авто размещения
          </p>
        </li>
        <li>
          <p
            className={`text-[18px] p-[10px] cursor-pointer ${
              isActive === 2
                ? 'text-black border-b-[2px] border-b-black'
                : 'text-grey'
            }`}
            onClick={() => handleActiveLink(2)}
          >
            Календарь
          </p>
        </li>
        <li>
          <p
            className={`text-[18px] p-[10px] cursor-pointer ${
              isActive === 3
                ? 'text-black border-b-[2px] border-b-black'
                : 'text-grey'
            }`}
            onClick={() => handleActiveLink(3)}
          >
            Арендования
          </p>
        </li>
      </ul>
    )
  }

  return navigationLinks[pageType]
}

export default HeaderUserNavbar
