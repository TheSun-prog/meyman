import ModalDefault from './ModalDefault'
import room from '../../../assets/images/hotel-image.png'
import { useState } from 'react'
import 'animate.css'

import { useSelector } from 'react-redux'

const ModalAllPhotos = ({ handleCLickCloseModal }) => {
  const [openImage, setOpenImage] = useState('')
  const [activeModal, setActiveModal] = useState(false)

  const state = useSelector(state => state.hotel)

  const handleOpenImage = e => {
    setActiveModal(true)
    setOpenImage(e.target.src)
  }

  return (
    <ModalDefault
      isTitle={false}
      classes={'!fixed w-[720px] !py-0 h-full overflow-y-scroll'}
      isBorder={false}
      handleCLickCloseModal={handleCLickCloseModal}
    >
      {activeModal && (
        <div
          onClick={() => {
            setActiveModal(false)
          }}
          className="absolute h-full animate__animated animate__fadeIn flex justify-center items-center top-0 right-0 bottom-0 left-0 bg-neutral-950 bg-opacity-70"
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
          <div className="flex gap-2 mb-[10px]">
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
          </div>
          <div className="flex gap-2 mb-[10px]">
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
          </div>
          <div className="flex gap-2 mb-[10px]">
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
          </div>
          <div className="flex gap-2 mb-[10px]">
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
          </div>
          <div className="flex gap-2 mb-[10px]">
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
          </div>
          <div className="flex gap-2 mb-[10px]">
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
            <img
              onClick={handleOpenImage}
              className="w-[300px] rounded-2xl"
              src={room}
              alt="room"
            />
          </div>
        </div>
      </div>
    </ModalDefault>
  )
}

export default ModalAllPhotos
