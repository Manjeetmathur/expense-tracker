import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div`
width: 180px;
       outline: none;
       border: none;
       font-family: inherit;
       font-size: inherit;
       display: flex;
       align-items: center;
       gap:.5rem;
       cursor: pointer;
       &:hover {
        background-color: #42ad00 !important;
      }
`

const Button = ({name,icon,onClick,bg,bPad,color,bRad}) => {
  return (
    <ButtonStyled style={{
       background:bg,
       padding:bPad,
       borderRadius:bRad,
       color:color
    }} onClick={onClick}> 
      {icon}{name}
    </ButtonStyled>
  )
}

export default Button
