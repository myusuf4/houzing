import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {ReactComponent as logoImg} from '../../assets/icons/logo.svg'

const Container=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;`;

  const Main=styled.div`
  display:flex;
  background: var(--colorPrimary);
  justify-content:center;`;

const Wrapper=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

  color:#fff;
  padding:var(--padding);
  height:64px;
  font-size:16px;
  width: 100%;
  max-width:1440px;
`;

const Sections=styled.div`
  display:flex;
  align-items:center;
  cursor: ${({logo})=>logo&&'pointer'};

  .active{
    color: #b8ff06
  }
`;

const Logo=styled(logoImg)`
  width:30px;
  margin-right:12px;
  & path{
    fill:#fff;
  }
`

const Link=styled(NavLink)`
  text-decoration:none;
  padding: 0 32px;
  color: #fff;
`
export {Container,Wrapper,Sections,Logo,Link,Main}