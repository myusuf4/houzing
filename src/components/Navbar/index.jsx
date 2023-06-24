import React from "react";
import { Container,Wrapper,Sections,Logo,Link,Main } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import {navbar} from '../../utils/navbar'
import Button from '../Generic/Button'


const Navbar=()=>{
  const navigate=useNavigate();
  return(
    <Container>
      <Main>

        <Wrapper>
          <Sections onClick={()=>navigate('/home')} logo>
            <Logo/> <h3>Houzing</h3>
          </Sections>
          <Sections>
            {
              navbar.map(({title,path},index)=>{
                return(
                  <Link
                  className={({isActive})=>isActive&&'active'}
                  key={index}
                  to={path}
                  >
                    
                    {title}</Link>
                )
              })
            }
          </Sections>
          <Sections>
            <Button type='dark' width='120' height='44'>Sign in</Button>
          </Sections>
        </Wrapper>
      </Main>
      <Outlet/>
    </Container>
  )
}
export default Navbar;