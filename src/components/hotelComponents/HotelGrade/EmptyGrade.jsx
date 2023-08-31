import empty from '../../../assets/images/empty_review.svg'

const EmptyGrade = () => {
  return (
    <div className='text-center w-[434px] mx-auto'>
      <img src={empty} alt="empty" className='m-auto'/>
      <p className='text-[24px]' style={{fontFamily: 'Quicksand'}}>Тут пока нет отзывов</p>
      <p className='text-[28px] text-[#898989] font-[400]' style={{fontFamily: 'Quicksand'}}>Оставьте свой первый отзыв.</p>
    </div>
  )
}

export default EmptyGrade
