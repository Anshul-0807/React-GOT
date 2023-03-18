import React from 'react'
 import { AppBar, Toolbar, styled} from '@mui/material';
import Logo from '../Image/logo-got.jpg';

const StyledHeader = styled(AppBar)`
background: #000;
`

const Header = () => {
  return (
   <StyledHeader position='static'>
    <Toolbar>
        <img src={Logo} alt="logo" style={{width:250}} />
    </Toolbar>
   </StyledHeader>
  )
}

export default Header