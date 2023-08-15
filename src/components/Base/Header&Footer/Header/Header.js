import logoheader from '../../../../assets/images/meyman-logo.svg'
import language from '../../../../assets/images/header-language.svg'
import money from '../../../../assets/images/header-money.svg'
import burgermenu from '../../../../assets/images/burger-menu.svg'
import register from '../../../../assets/images/header-profile.svg'


function Header() {
  return (
    <div className='container mx-auto py-[20px] w-[1240px]'>
      <div className='h-[60px] flex justify-between'>
         <img src={logoheader} alt="header"/>
         <div className='flex items-center'>
           <div className='flex'>
              <img src={language} alt="language"/>
              <p className='ml-3'>Русский</p>
           </div>
           <div className='flex ml-[21px]'>
              <img src={money} alt="money"/>
              <p className='ml-3'>USD</p>
           </div>
           <button className='bg-[#1164B4] w-[260px] ml-[57px] shadow-header-btn border border-gray-300 border-opacity-25
           py-[11px] mx-[22] rounded-[27px] text-[18px] leading-[normal] text-[#fff]'
           >Сдать жилье на Meyman</button>
           <div className='ml-[20px] rounded-[34px] py-[7px] px-[42px] border border-solid border-[#1164B4] flex'>
              <img
               src={burgermenu} alt="burger"/>
              <img
              className='ml-[21px]'
              src={register} alt="register"/>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Header
