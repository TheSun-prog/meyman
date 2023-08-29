import clear from '../../../assets/images/clear.svg'
import 'animate.css'

const ModalDefault = ({
  handleCLickCloseModal,
  children,
  classes,
  isBorder,
  isTitle,
  isClose = true,
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
      className="fixed inset-0 z-40 w-screen bg-black bg-opacity-40 animate__animated animate__fadeIn"
    >
      <div
        className={`bg-white ${classes} z-50 rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="relative">
          <div
            className={`relative ${
              isBorder ? 'border-b' : ''
            }  border-[#8C8C8C] w-full pb-4 mt-8 flex justify-center`}
          >
            {isClose && (
              <img
                onClick={handleCLickCloseModal}
                className="top-0 left-5 absolute cursor-pointer"
                src={clear}
                alt="clear"
              />
            )}
            {isTitle && (
              <h3 className="text-center m-auto text-[28px]">{title}</h3>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalDefault
