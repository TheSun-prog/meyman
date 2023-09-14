// components
import SupportCard from '../../components/supportComponents/SupportCard/SupportCard'
// data
import supportData from './supportData'
// modules
import { NavLink } from 'react-router-dom'
// icon
import arrow2 from '../../assets/images/arrow2.svg'

const Support = () => {
  return (
    <div className='mx-auto w-[1240px]'>
      <div className="text-[16px] flex items-center mb-[50px] mt-[45px]">
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow2} alt="arrow" />
        <NavLink to={`/support`}>Служба поддержки</NavLink>
      </div>
      <h5 className='text-[28px] mb-10'>Служба поддержки</h5>
      <div className="grid grid-cols-2 gap-[40px]">
        {supportData.map(support => (
          <SupportCard
            key={support.id}
            img={support.icon}
            title={support.title}
            subTitle={support.subTitle}
            link={support.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Support
