import { Modal } from 'antd'
import HotelSendReview from '../HotelSendReview/HotelSendReview'
import { Rate } from 'antd/lib'
import geo from '../../../assets/images/place.svg'
import TextArea from 'antd/es/input/TextArea'
import Button from '../../ui/Button/Button'
import { useEffect, useState } from 'react'
import clear from '../../../assets/images/clear.svg'
import { useDispatch } from 'react-redux'
import { postReviewsData } from '../../../store/slice/reviewsSlice'
import { fetchHotelData } from '../../../store/slice/hotelSlice'

const ModalSendReview = ({ isOpen, handleOk, handleCancel, data, hotelId }) => {
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('');

  const [initialDataRate, setInitialDataRate] = useState({
    user: '',
    housing: null,
    staff_rating: 0,
    comfort_rating: 0,
    cleanliness_rating: 0,
    value_for_money_rating: 0,
    food_rating: 0,
    location_rating: 0,
    comment: ''
  })

  const [errorText, setErrorText] = useState(false)

  const customIcons = Array.from({ length: 10 }, (_, i) => (
    <HotelSendReview key={i} num={i + 1} />
  ))

  const fields = [
    {
      field: 'staff_rating',
      label: 'Насколько вам понравился персонал?'
    },
    {
      field: 'comfort_rating',
      label: 'Было ли вам комфортно в нашем отеле?'
    },
    {
      field: 'cleanliness_rating',
      label: 'Довольны ли вы уровнем чистоты в отеле?'
    },
    {
      field: 'value_for_money_rating',
      label: 'Вас устроило соотношение цены и качества?'
    },
    {
      field: 'food_rating',
      label: 'Вам понравилось питание в нашем отеле?'
    },
    {
      field: 'location_rating',
      label: 'Вас устроило месторасположение отеля?'
    }
  ]

  const ratingDescriptions = {
    1: { text: 'Плохо', color: '#660000' },
    2: { text: 'Ужасно', color: '#8C2800' },
    3: { text: 'Неудовлетворительно', color: '#994C00' },
    4: { text: 'Не очень', color: '#B57100' },
    5: { text: 'Нормально', color: '#CC9900' },
    6: { text: 'Хорошо', color: '#E6B21E' },
    7: { text: 'Очень хорошо', color: '#A3C140' },
    8: { text: 'Отлично', color: '#7AC15F' },
    9: { text: 'Замечательно', color: '#51C17E' },
    10: { text: 'Превосходно', color: '#00B700' }
  }

  const warning = () => {
    Modal.warning({
      title: 'Все поля должны быть заполнены!',
      bodyStyle: { padding: '50px' },
      footer: null,
      centered: true,
      keyboard: true,
      maskClosable: true
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    // Проверяем, что все рейтинги не равны 0 и комментарий не пуст и длина комментария больше 5 символов
    if (
      Object.values(initialDataRate).every(value => value !== 0) &&
      initialDataRate.comment.trim() !== '' &&
      initialDataRate.comment.length >= 5
    ) {
      // Если все условия выполняются, то диспатчим данные
      dispatch(postReviewsData(initialDataRate))
      dispatch(fetchHotelData(hotelId))
      handleOk()
      //window.location.reload();
    } else if (initialDataRate.comment.length < 5) {
      setErrorText(true) // Устанавливаем errorText в true
    } else {
      warning()
    }
  }

  const handleRateChange = (field, rate) => {
    setInitialDataRate(prev => ({
      ...prev,
      [field]: rate
    }))
  }

  useEffect(() => {
    // Получаем данные из локального хранилища при монтировании компонента
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
      setUserId(storedUserId); // Устанавливаем userId в состоянии
    }
  }, []);
  
  useEffect(() => {
    // После установки userId в состоянии, можно его использовать в initialDataRate
    setInitialDataRate(prev => ({
      ...prev,
      user: userId // Устанавливаем userId в initialDataRate
    }));
  }, [userId]);

  useEffect(() => {
    if (data.id !== null) {
      // Если id не равно null, значит данные загружены, и мы можем его установить
      setInitialDataRate(prev => ({
        ...prev,
        housing: data.id
      }))
    }
  }, [data])

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={725}
      style={{ borderRadius: '20px' }}
      bodyStyle={{ padding: '20px 70px' }}
      closeIcon={false}
    >
      <img
        onClick={handleCancel}
        className="absolute cursor-pointer top-6 left-6"
        src={clear}
        alt="clear"
      />
      <h2 className="text-center text-[28px] border-b pb-4">Отзывы</h2>
      <div className="flex gap-[27px] mt-[40px]">
        <img
          src={process.env.REACT_APP_API_URL + data?.housing_images?.[0]?.image}
          alt="hotel"
          className="object-cover w-[270px] h-[250px] rounded-[30px]  border-2 border-black"
        />
        <div>
          <h3 className="text-[32px] font-[500]">
            {data?.housing_name}
          </h3>
          <Rate defaultValue={5} disabled style={{ fontSize: '25px' }} />
          <div className="flex gap-2 mt-3">
            <img src={geo} alt="geo" />
            <span className="text-[22px] text-[#787878]">
              {data?.address}
            </span>
          </div>
        </div>
      </div>
      <form className="mt-[40px]" onSubmit={handleFormSubmit}>
        {fields.map(({ field, label }) => (
          <div className="mb-[40px]" key={field}>
            <label htmlFor={label} className="text-[22px]">
              {label}
            </label>
            <p
              className="text-[22px] h-[30px] mb-[12px] font-[500]"
              style={{
                color: ratingDescriptions[initialDataRate[field]]?.color
              }}
            >
              {ratingDescriptions[initialDataRate[field]]?.text}
            </p>
            <Rate
              onChange={rate => handleRateChange(field, rate)}
              count={10}
              style={{ fontSize: '22px', color: '#1164B4' }}
              character={({ index }) => customIcons[index]}
            />
          </div>
        ))}
        <p className="text-[22px] mb-[20px] mt-[40px]">
          Пожалуйста, оставьте ваш комментарий:
        </p>
        <TextArea
          status={errorText ? 'error' : ''}
          required
          minLength={5}
          onChange={e =>
            setInitialDataRate(prev => ({
              ...prev,
              comment: e.target.value
            }))
          }
          onFocus={() => {
            setErrorText(false)
          }}
          className={'placeholder-text-red-700'}
          value={initialDataRate.comment}
          style={{
            fontSize: '24px',
            borderRadius: '27px',
            padding: '15px'
          }}
          autoSize={{ minRows: 6, maxRows: 12 }}
          maxLength={500}
          placeholder={'Напишите ваш комментарий'}
        />
        {errorText ? (
          <div className="mb-[40px] flex gap-1 text-red">
            <div className="rounded-full text-white text-lg flex items-center justify-center bg-red w-5 h-5">
              <span>!</span>
            </div>{' '}
            Комментарий должен быть больше 5 символов!
          </div>
        ) : (
          <span className="block mb-[40px]">
            Символов: {initialDataRate.comment.length} из 500
          </span>
        )}
        <Button classes={'py-[20px] text-[28px] w-full mb-[60px]'}>
          Отправить
        </Button>
      </form>
    </Modal>
  )
}

export default ModalSendReview
