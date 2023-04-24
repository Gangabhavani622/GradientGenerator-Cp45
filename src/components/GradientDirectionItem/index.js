// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, isActive, clickUpdateActiveDirection} = props
  const {displayText, value} = gradientDetails

  const onClickUpdateActiveDirection = () => {
    clickUpdateActiveDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickUpdateActiveDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
