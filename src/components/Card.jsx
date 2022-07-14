import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
background-color: ${(props) => props.bgc ? props.bgc : "purple"};
width: ${(props) => props.width ? props.width : "100%"}
`

const Card = (props) => {
  return (
    <>
      <StyledCard>
        
      </StyledCard>
    </>
  )
}

export default Card