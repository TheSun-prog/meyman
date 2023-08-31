import ModalDefault from './ModalDefault'
import { useState } from 'react'
import 'animate.css'

const ModalAllPhotos = ({data, id, handleCLickCloseModal }) => {
  const [openImage, setOpenImage] = useState('')
  const [activeModal, setActiveModal] = useState(false)

  const handleOpenImage = e => {
    setActiveModal(true)
    setOpenImage(e.target.src)
  }

  return (
    <ModalDefault
      isTitle={false}
      classes={'!fixed w-1/3 !py-0 h-[80vh] overflow-x-hidden overflow-auto'}
      isBorder={false}
      handleCLickCloseModal={handleCLickCloseModal}
    >
      {activeModal && (
        <div
          onClick={() => {
            setActiveModal(false)
          }}
          className="fixed h-[100vh] animate__animated animate__fadeIn flex justify-center items-center top-0 right-0 bottom-0 left-0 bg-neutral-950 bg-opacity-70"
        >
          <img
            src={openImage}
            alt="openImage"
            className="w-[400px] h-[320px] rounded-2xl"
          />
        </div>
      )}
      <div className="flex justify-center gap-5 mt-10">
        <div className="flex flex-col ">
          <div className="flex flex-wrap justify-center gap-2 mb-[10px]">
            {data?.results?.[id]?.housing_images.map(img => (
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
    </ModalDefault>
  )
}

export default ModalAllPhotos
