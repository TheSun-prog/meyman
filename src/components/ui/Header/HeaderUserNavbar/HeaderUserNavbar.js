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

  // const currencies = {
  //   'KGS': som,
  //   'EUR': eur,
  //   'USD': usd
  // }

  const navigationLinks = {
    mainpage: (
      <div className="flex items-center justify-self-end">
        <div className="flex items-center">
          <div className="relative">

          </div>
        </div>
        <NavLink to="/businessMainPage">
          <Button classes={'shadow-md'} width={237} height={44} text="Сдать жилье на Meyman" />
        </NavLink>
        <NavLink to='/favorites'>
          <div className='flex gap-[4px] ml-[20px] cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_8564_42673)">
                <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#E72323" />
              </g>
            </svg>
            <span className='text-[16px]'>Избранные</span>
          </div>
        </NavLink>
      </div>
    ),
    hotel: (
      <ul className="flex gap-[39px]">
        <li>
          <p
            className={`text-[18px] p-[10px] cursor-pointer ${isActive === 1
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
            className={`text-[18px] p-[10px] cursor-pointer ${isActive === 2
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
            className={`text-[18px] p-[10px] cursor-pointer ${isActive === 3
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
            className={`text-[18px] p-[10px] cursor-pointer ${isActive === 4
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
            className={`text-[18px] p-[10px] cursor-pointer ${isActive === 1
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
            className={`text-[18px] p-[10px] cursor-pointer ${isActive === 2
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
            className={`text-[18px] p-[10px] cursor-pointer ${isActive === 3
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
