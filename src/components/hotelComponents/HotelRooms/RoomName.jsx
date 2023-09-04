const RoomName = ({maxGuest, bedType, classes}) => {
  return (
    <p className={`text-[20px] mt-[20px] ${classes}`}>
      {maxGuest > 1 ? 'Двухместный ' : 'Одноместный '}
      номер с {' '}
      {bedType === 'Односпальные'
        ? ' односпальной '
        : bedType === 'Двуспальная'
        ? ' двуспальной '
        : Array.isArray(bedType) &&
          bedType.includes('Односпальные') &&
          bedType.includes('Двуспальная')
        ? ' односпальной и двуспальной '
        : bedType}
      {' '}кроватью
    </p>
  )
}

export default RoomName
