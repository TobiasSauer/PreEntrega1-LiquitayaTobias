import React from 'react';
import './NavBar.css';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import Logo from '../assets/img/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <header>
        <nav>
            <div className="logo">
            <img src={Logo}/>
            </div>
            <ButtonGroup variant="text" aria-label="text button group" className='ButtonGroup'>
                <Button>Home</Button>
                <Button>About</Button>
                <Button>Contact</Button>
            </ButtonGroup>
            <CartWidget/>
        </nav>
    </header>
  );
}

export default NavBar;