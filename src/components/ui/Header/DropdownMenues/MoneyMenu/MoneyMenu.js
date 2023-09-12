import { useEffect, useState } from 'react'
import close from '../../../../../assets/images/close.svg'
import { useDispatch } from 'react-redux'
import { setCurrency } from '../../../../../store/slice/currencySlice'

const LanguageMenu = ({ closeMenu }) => {
  const dispatch = useDispatch()

  const currencies = [
    { code: 'KGS', name: 'Сом' },
    { code: 'USD', name: 'Доллар' },
    { code: 'EUR', name: 'Евро' }
  ]
  const [dataLocalStorage, setDataLocalStorage] = useState('')
  const [activeCurrency, setActiveCurrency] = useState(dataLocalStorage)

  useEffect(() => {
    setDataLocalStorage(localStorage.getItem('currency'))
  }, [])

  useEffect(() => {
    // Обновите значение в локальном хранилище при изменении активной валюты.
    localStorage.setItem('currency', activeCurrency)
  }, [activeCurrency])

  return (
    <div
      className={`absolute top-[42px] right-0 w-[224px] min-h-[276px] rounded-[18px] shadow-dropdown-menu border-light-white border-[1px] py-[20px] px-[30px] flex flex-col gap-[25px] bg-white`}
    >
      <div className="flex justify-between">
        <p>Валюта</p>
        <img
          src={close}
          alt="close"
          className="cursor-pointer"
          onClick={() => closeMenu('')}
        />
      </div>
      <div className="flex flex-col gap-[12px]">
        {currencies.map(currency => (
          <div
          key={currency.code}
          className={`w-[164px] h-[54px] rounded-[10px] px-[20px] py-[4px] text-[16px] flex flex-col items-between border-blue border-[1px] cursor-pointer ${
            activeCurrency === currency.code ? 'bg-blue text-white' : ''
          }`}
          onClick={() => {
            setActiveCurrency(currency.code); // Устанавливаем новую активную валюту
            dispatch(setCurrency(currency.code)); // Отправляем новое значение валюты в Redux
          }}
        >
          <p>{currency.name}</p>
          <p>{currency.code}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LanguageMenu
