import React from 'react'
 import { AppBar, Toolbar, styled} from '@mui/material';
import Logo from '../Image/logo-got.jpg';

const StyledHeader = styled(AppBar)`
background: #000;
`

const Header = () => {
  return (
   <StyledHeader>
    <Toolbar>
        <img src={Logo} alt="logo" />
    </Toolbar>
   </StyledHeader>
  )
}

export default Header