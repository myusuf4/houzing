import React from "react";
import { Container } from "./style";


const Button=({children,type,width,height})=>{
  return(
    <Container type={type} width={width} height={height}>
      {children || 'Button'}
    </Container>
  )
}
export default Button;