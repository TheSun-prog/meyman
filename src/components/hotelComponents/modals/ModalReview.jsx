import person from '../../../assets/images/viliam.jpg'
import ModalDefult from './ModalDefault'

const ModalReview = ({ handleCLickCloseModal, data }) => {
  const totalRate =
    (data.cleanliness_rating +
      data.comfort_rating +
      data.food_rating +
      data.location_rating +
      data.staff_rating +
      data.value_for_money_rating) /
    6

  return (
    <ModalDefult
      classes={'w-[634px] !fixed'}
      isBorder={false}
      handleCLickCloseModal={handleCLickCloseModal}
      isTitle={false}
    >
      <div className="mt-3 p-[30px]">
        <div className="flex items-center ">
          <img
            className="h-[80px] w-[80px] object-cover rounded-full"
            src={person}
            alt="person"
          />
          <span className="text-[22px] ml-3">William</span>
        </div>
        <p className="text-[18px] mt-4">{data?.comment}</p>
        <div className="h-[80px] flex justify-center items-center absolute -top-9 rounded-b-lg p-2 right-4 bg-[#FFC506] text-xl  text-white">
          <span>{Math.round(totalRate)}</span>
        </div>
      </div>
    </ModalDefult>
  )
}

export default ModalReview
