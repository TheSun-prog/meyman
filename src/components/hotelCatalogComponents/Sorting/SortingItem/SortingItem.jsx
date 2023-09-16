import { Radio } from 'antd'

const SortingItem = ({text, handleChange, checked}) => {
  return (
    <div className="flex justify-between">
      <span className="text-[18px]">{text}</span>
      <Radio onChange={handleChange} checked={checked}/>
    </div>
  )
}

export default SortingItem