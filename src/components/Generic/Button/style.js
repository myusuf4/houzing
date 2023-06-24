import styled from 'styled-components'

const getType=({type})=>{
  switch(type){
    case 'dark':
      return{
        background:'transparent',
        border:'1px solid #FFFFFF',
        color:'#FFFFFF'
            };
    case 'light':
      return{
        background:'#FFFFFF',
        border:'1px solid #E6E9EC',
        color:'#0D263B'
            };    
    case 'primary':
      return{
        background:'#0061DF',
        border:'none',
        color:'#FFFFFF'
            };    
    default :
      return{
        background:'#0061DF',
        border:'none',
        color:'#FFFFFF'
            }
  }
};




const Container=styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:2px;
  min-width:120px;
  font-size:${({fontSize})=>(fontSize?`${fontSize}px`:'14px')};
  height:${({height})=>(height?`${height}px`:'44px')};
  width:${({width})=>(width?`${width}px`:'128px')};
  cursor:pointer;
  ${getType};
  &:active {
    opacity: 0.7;
  }
`

export {Container}