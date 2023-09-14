import { NavLink } from 'react-router-dom'
import Button from '../../ui/Button/Button'

const SupportCard = ({ img, title, subTitle, link }) => {
  return (
    <div className="flex flex-col gap-[25px] rounded-[18px] shadow-lg py-[17px] px-[20px] border">
      <img src={img} alt="iconSocialMedia" className="w-[48px] h-[48px]" />
      <div>
        <h3 className="text-[22px] font-medium">{title}</h3>
        <p className="text-[18px] text-[#A1A1A1]">{subTitle}</p>
      </div>
      <a href={link}>
        <Button classes={'py-[14px] w-full text-[18px]'}>Связаться</Button>
      </a>
    </div>
  )
}

export default SupportCard
