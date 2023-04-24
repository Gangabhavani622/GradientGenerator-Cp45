// Style your elements her
import styled from 'styled-components/macro'

export const GradientContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-image:linear-gradient(${props => props.gradientValue})
min-height:100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const Paragraph = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const GradientDirectionList = styled.ul`
  display: flex;

  justify-content: space-between;

  flex-wrap: wrap;

  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const CustomInput = styled.input`
  background-color: transparent;
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`
