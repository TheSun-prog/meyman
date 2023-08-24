import clear from '../../../assets/images/clear.svg'
import 'animate.css'

const ModalDefult = ({
  handleCLickCloseModal,
  children,
  classes,
  isBorder,
  isTitle,
  title
}) => {
  const handleBackgroundClick = event => {
    if (event.target.classList.contains('bg-black')) {
      handleCLickCloseModal()
    }
  }

  return (
    <div
      onClick={handleBackgroundClick}
      className="absolute inset-0 z-40 w-screen bg-black bg-opacity-40 animate__animated animate__fadeIn"
    >
      <div
        className={`bg-white ${classes} z-50 py-[37px] rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="relative">
          <div
            className={`relative ${
              isBorder ? 'border-b' : ''
            }  border-[#8C8C8C] w-full pb-[44px]`}
          >
            <img
              onClick={handleCLickCloseModal}
              className="absolute top-2 left-4 cursor-pointer"
              src={clear}
              alt="clear"
            />
            {isTitle && <h3 className="text-center text-[28px]">{title}</h3>}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalDefult
