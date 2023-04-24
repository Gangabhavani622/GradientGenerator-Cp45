import Component from 'react'

import {
  GradientContainer,
  ResponsiveContainer,
  Heading,
  Paragraph,
  GradientDirectionList,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onClickUpdateActiveDirection = value => {
    this.setState({activeDirection: value})
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onGenerate = () => {
    const {activeDirection, fromColor, toColor} = this.state
    this.setState({
      gradientValue: `to ${activeDirection},${fromColor},${toColor}`,
    })
  }

  render() {
    const {activeDirection, fromColor, toColor, gradientValue} = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                gradientDetails={eachItem}
                clickUpdateActiveDirection={this.onClickUpdateActiveDirection}
                isActive={eachItem.value === activeDirection}
              />
            ))}
          </GradientDirectionList>
          <Paragraph>Pick the Colors</Paragraph>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColor}</ColorValue>
              <CustomInput
                type="color"
                value={fromColor}
                onChange={this.onChangeFromColor}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{toColor}</ColorValue>
              <CustomInput
                type="color"
                value={toColor}
                onChange={this.onChangeToColor}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.onGenerate}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
