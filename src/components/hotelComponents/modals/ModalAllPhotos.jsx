import { useState } from 'react'
import { Modal } from 'antd'
import close from '../../../assets/images/arrow2.svg'

const ModalAllPhotos = ({ isOpen, handleOk, handleCancel, data, id }) => {
  const [openImage, setOpenImage] = useState('')
  const [activeModal, setActiveModal] = useState(false)

  const handleOpenImage = e => {
    setActiveModal(true)
    setOpenImage(e.target.src)
  }

  const closeModal = () => {
    setActiveModal(false)
  }

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      bodyStyle={{ padding: '20px' }}
      width={720}
    >
      <Modal
        open={activeModal}
        onOk={closeModal}
        onCancel={closeModal}
        footer={null}
        closeIcon={false}
        centered={true}
        className="!w-[550px]"
      >
        <img
          src={openImage}
          alt="openImage"
          className="!w-[550px] h-[420px] mx-auto rounded-2xl"
        />
      </Modal>
      <img
        onClick={handleCancel}
        className="absolute cursor-pointer left-5 rotate-90"
        src={close}
        alt="clear"
      />
      <div className="flex justify-center gap-5 mt-10">
        <div className="flex flex-col ">
          <div className="flex flex-wrap justify-center gap-2 mb-[10px]">
            {data?.map(img => (
              <img
                key={img.id}
                onClick={handleOpenImage}
                className="w-[300px] h-[220px] px-2 rounded-2xl object-cover cursor-pointer"
                src={img.image}
                alt="room"
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalAllPhotos
