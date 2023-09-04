import { Modal } from 'antd'
import successIcon from '../../../assets/images/success.svg'
import Button from '../../ui/Button/Button'

const ModalSuccess = ({isOpen, handleOk, handleCancel }) => {
  return (
    <Modal
    open={isOpen}
    onOk={handleOk}
    onCancel={handleCancel}
    footer={null}
    closeIcon={false}
    bodyStyle={{padding: '30px 10px'}}
    >
      <div className='relative flex flex-col justify-between h-full  px-[55px] text-center'>
        <img className='mb-4 w-10 h-10 m-auto' src={successIcon} alt="successIcon" />
        <h4 className='text-[22px]'>Бронирование успешно выполнено!</h4>
        <p className='text-[18px] pb-5 text-[#787878]'>Мы рады предоставить вам доступ к лучшим предложениям</p>
        <Button clickFunc={handleOk} classes={'h-[65px]'}>Продолжить</Button>
      </div>
    </Modal>
  )
}

export default ModalSuccess
