import ModalDefult from '../../hotelComponents/modals/ModalDefault'
import wifi from '../../../assets/images/wifi.svg'
import bar from '../../../assets/images/bar.svg'

const ModalAllServices = ({handleCLickCloseModal}) => {
  return (
    <ModalDefult
      title={'Удобства номера'}
      isTitle={true}
      classes={'w-[750px]'}
      isBorder={true}
      handleCLickCloseModal={handleCLickCloseModal}
    >
      <ul className="pl-[80px] mt-[42px]">
        <li className="flex mb-[24px] ">
          <div className="flex  ">
            <img className="mr-[14px]" src={wifi} alt="wifiIcon" />
            <span className="text-[24px]">Интерент</span>
          </div>
        </li>
        <li className="flex mb-[24px] ">
          <div className="flex">
            <img className="mr-[14px]" src={wifi} alt="wifiIcon" />
            <span className="text-[24px]">Спортивный зал</span>
          </div>
        </li>
        <li className="flex mb-[24px]">
          <div className="flex">
            <img className="mr-[14px]" src={bar} alt="wifiIcon" />
            <span className="text-[24px]">Бар/ресторан</span>
          </div>
        </li>
        <li className="flex mb-[24px]">
          <div className="flex">
            <img className="mr-[14px]" src={bar} alt="wifiIcon" />
            <span className="text-[24px]">Трансфер</span>
          </div>
        </li>
      </ul>
    </ModalDefult>
  )
}

export default ModalAllServices
