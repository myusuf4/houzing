import React from "react";
import { Container,Wrapper,Sections,Logo,Link,Main } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import {navbar} from '../../utils/navbar'


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
            <button>Sign In</button>
          </Sections>
        </Wrapper>
      </Main>
      <Outlet/>
    </Container>
  )
}
export default Navbar;